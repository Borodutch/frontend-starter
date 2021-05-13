import { makeAutoObservable } from 'mobx'
import { isSynchronized, persistence } from 'mobx-persist-store'
import Language from 'models/Language'
import storageAdapter from 'stores/storageAdapter'

class AppStore {
  language: Language = Language.en

  constructor() {
    makeAutoObservable(this)
  }

  get isSynchronized() {
    return isSynchronized(this)
  }
}

export default persistence({
  name: 'AppStore',
  properties: ['language'],
  adapter: storageAdapter,
})(new AppStore())
