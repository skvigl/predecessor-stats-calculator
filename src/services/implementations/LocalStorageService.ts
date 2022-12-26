export class LocalStorageServce {
  name: string

  constructor(name: string) {
    this.name = name
  }

  get = (): any => {
    try {
      const builds = JSON.parse(localStorage.getItem(this.name))

      return builds === null ? {} : builds
    } catch {
      return {}
    }
  }

  set = (value: any) => {
    localStorage.setItem(this.name, JSON.stringify(value))
  }
}
