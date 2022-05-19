import { proxy } from 'valtio'
import getUserCount from 'helpers/getUserCount'

class AppStore {
  userCount = getUserCount()
}

export default proxy(new AppStore())
