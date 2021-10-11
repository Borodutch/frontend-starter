import { IntlProvider as BaseIntlProvider } from 'react-intl'
import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import AppStore from 'stores/AppStore'
import Language from 'models/Language'
import en from 'i18n/locales/en.json'
import ru from 'i18n/locales/ru.json'

const messages = {
  en,
  ru: { ...en, ...ru },
}

const IntlProvider: FC = ({ children }) => {
  return (
    <BaseIntlProvider
      locale={AppStore.language}
      defaultLocale={Language.en}
      messages={messages[AppStore.language]}
    >
      {children}
    </BaseIntlProvider>
  )
}

export default observer(IntlProvider)
