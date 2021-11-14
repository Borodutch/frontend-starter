import LanguageButtons from 'components/LanguageButtons'
import LocalizationProvider from 'localization/LocalizationProvider'
import MainBlock from 'components/MainBlock'
import Root from 'components/Root'

const App = () => {
  return (
    <Root>
      <LocalizationProvider>
        <MainBlock />
        <LanguageButtons />
      </LocalizationProvider>
    </Root>
  )
}

export default App
