import { proxy } from 'valtio'
import Language from 'models/Language'
import PersistableStore from 'stores/persistence/PersistableStore'

class AppStore extends PersistableStore {
  language: Language = Language.en
}

export default proxy(new AppStore()).makePersistent()
