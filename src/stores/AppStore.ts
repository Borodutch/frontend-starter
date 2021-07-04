import { makeAutoObservable } from 'mobx'
import { makePersistable, isHydrated } from 'mobx-persist-store'
import Language from 'models/Language'

class AppStore {
  language: Language = Language.en

  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
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
