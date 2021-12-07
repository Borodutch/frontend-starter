import { BodyText } from 'components/Text'
import useUserCount from 'hooks/useUserCount'
import { useLocalize } from 'localization/useTypedLocalize'

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
