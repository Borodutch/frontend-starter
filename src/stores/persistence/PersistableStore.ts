import { subscribe } from 'valtio'

export default class PersistableStore {
  makePersistent() {
    // Start persisting
    subscribe(this, () => {
      localStorage.setItem(this.constructor.name, JSON.stringify(this))
    })
    // Recover the store
    const savedString = localStorage.getItem(this.constructor.name)
    if (savedString) {
      const savedState = JSON.parse(savedString)
      Object.assign(this, savedState)
    }
    // Allow chaining
    return this
  }
}
