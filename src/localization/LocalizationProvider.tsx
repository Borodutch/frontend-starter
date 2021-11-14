import { LocalizationProvider as BaseLocalizationProvider } from '@borodutch-labs/localize-react'
import { FC } from 'preact/compat'
import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'
import Language from 'models/Language'
import en from 'localization/locales/en.json'
import ru from 'localization/locales/ru.json'

const messages = {
  en,
  ru: { ...en, ...ru },
}

const LocalizationProvider: FC = ({ children }) => {
  const appStore = useSnapshot(AppStore)
  return (
    <BaseLocalizationProvider
      locale={appStore.language}
      defaultLocale={Language.en}
      translations={messages}
      disableCache
    >
      {children}
    </BaseLocalizationProvider>
  )
}

export default LocalizationProvider
