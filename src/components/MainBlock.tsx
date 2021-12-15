import { BodyText } from 'components/Text'
import useI18N from 'hooks/useI18N'
import useUserCount from 'hooks/useUserCount'

export default function MainBlock() {
  const { userCount } = useUserCount()

  const { LL } = useI18N()

  return (
    <>
      <BodyText>{LL.userCount({ count: userCount })}</BodyText>
      <BodyText>{LL.title()}</BodyText>
    </>
  )
}
