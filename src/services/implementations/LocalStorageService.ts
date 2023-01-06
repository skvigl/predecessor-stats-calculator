export class LocalStorageServce<T extends {} | {}> {
  name: string

  constructor(name: string) {
    this.name = name
  }

  get = (): T | {} => {
    try {
      const builds = JSON.parse(localStorage.getItem(this.name))

      return builds === null ? {} : builds
    } catch {
      return {}
    }
  }

  set = (value: T | {}) => {
    localStorage.setItem(this.name, JSON.stringify(value))
  }
}
