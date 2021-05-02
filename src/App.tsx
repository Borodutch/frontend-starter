import React from 'react'
import Root from 'components/Root'
import useApp from 'hooks/useApp'
import { BodyText } from 'components/Text'

const App = () => {
  const { userCount } = useApp()

  return (
    <Root>
      <BodyText>User count: {userCount}</BodyText>
    </Root>
  )
}

export default App
