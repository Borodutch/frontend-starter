import AppStore from 'stores/AppStore'
import Button from 'components/Button'
import Language from 'models/Language'
import useI18N from 'hooks/useI18N'

export default function LanguageButtons() {
  const { setLocale } = useI18N()

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
