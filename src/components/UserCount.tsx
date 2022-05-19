import { BodyText } from 'components/Text'
import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'
import formatNumber from 'helpers/formatNumber'

export default function () {
  const { userCount } = useSnapshot(AppStore)
  return <BodyText>User count: {formatNumber(userCount)}</BodyText>
}
