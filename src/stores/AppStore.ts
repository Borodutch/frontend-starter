import { isHydrated, makePersistable } from 'mobx-persist-store'
import { makeAutoObservable } from 'mobx'
import Language from 'models/Language'

class AppStore {
  language: Language = Language.en

  constructor() {
    makeAutoObservable(this)
    void makePersistable(this, {
      name: 'AppStore',
      properties: ['language'],
      storage: window.localStorage,
    })
  }

  get isHydrated() {
    return isHydrated(this)
  }
}

export default new AppStore()
