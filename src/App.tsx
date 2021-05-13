import React from 'react'
import Root from 'components/Root'
import useApp from 'hooks/useApp'
import { BodyText } from 'components/Text'
import IntlProvider from 'i18n/IntlProvider'
import LanguageButtons from 'components/LanguageButtons'
import { FormattedMessage } from 'react-intl'

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
