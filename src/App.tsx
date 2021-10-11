import { BodyText } from 'components/Text'
import { FormattedMessage } from 'react-intl'
import { configure } from 'mobx'
import IntlProvider from 'i18n/IntlProvider'
import LanguageButtons from 'components/LanguageButtons'
import Root from 'components/Root'
import useApp from 'hooks/useApp'

configure({
  enforceActions: 'never',
})

const App = () => {
  const { userCount } = useApp()

  return (
    <Root>
      <IntlProvider>
        <BodyText>User count: {userCount}</BodyText>
        <BodyText>
          <FormattedMessage id="title" />
        </BodyText>
        <LanguageButtons />
      </IntlProvider>
    </Root>
  )
}

export default App
