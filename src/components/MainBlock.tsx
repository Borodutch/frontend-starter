import { BodyText } from 'components/Text'
import { I18nContext } from 'i18n/i18n-react'
import { useContext } from 'react'
import useUserCount from 'hooks/useUserCount'

export default function MainBlock() {
  const { userCount } = useUserCount()

  const { LL } = useContext(I18nContext)

  return (
    <>
      <BodyText>{LL.userCount({ count: userCount })}</BodyText>
      <BodyText>{LL.title()}</BodyText>
    </>
  )
}
