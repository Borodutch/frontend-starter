import AppStore from 'stores/AppStore'
import LanguageButtons from 'components/LanguageButtons'
import MainBlock from 'components/MainBlock'
import Root from 'components/Root'
import TypesafeI18n from 'i18n/i18n-react'

const App = () => {
  return (
    <Root>
      <TypesafeI18n initialLocale={AppStore.language}>
        <MainBlock />
        <LanguageButtons />
      </TypesafeI18n>
    </Root>
  )
}

export default App
