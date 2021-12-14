import { I18nContext } from 'i18n/i18n-react'
import { useContext } from 'react'
import AppStore from 'stores/AppStore'
import Button from 'components/Button'
import Language from 'models/Language'

export default function LanguageButtons() {
  const { setLocale } = useContext(I18nContext)

  return (
    <div>
      {Object.values(Language).map((k) => (
        <Button
          key={k}
          onClick={async () => {
            await setLocale(k)
            AppStore.language = k
          }}
          title={k}
        />
      ))}
    </div>
  )
}
