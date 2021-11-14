import { BodyText } from 'components/Text'
import { useLocalize } from '@borodutch-labs/localize-react'
import useUserCount from 'hooks/useUserCount'

export default function MainBlock() {
  const { userCount } = useUserCount()
  const { translate } = useLocalize()

  return (
    <>
      <BodyText>{translate('userCount', { count: userCount || '~' })}</BodyText>
      <BodyText>{translate('title')}</BodyText>
    </>
  )
}
