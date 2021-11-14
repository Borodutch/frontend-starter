import { BodyText } from 'components/Text'
import { Message } from '@borodutch-labs/localize-react'
import { configure } from 'mobx'
import LanguageButtons from 'components/LanguageButtons'
import LocalizationProvider from 'localization/LocalizationProvider'
import Root from 'components/Root'
import useApp from 'hooks/useApp'

configure({
  enforceActions: 'never',
})

const App = () => {
  const { userCount } = useApp()

  return (
    <Root>
      <LocalizationProvider>
        <BodyText>User count: {userCount}</BodyText>
        <BodyText>
          <Message descriptor="title" />
        </BodyText>
        <LanguageButtons />
      </LocalizationProvider>
    </Root>
  )
}

export default App
