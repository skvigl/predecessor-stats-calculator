export class LocalStorageServce {
  name: string

  constructor(name: string) {
    this.name = name
  }

  get = (): string | null => {
    return localStorage.getItem(this.name)
  }

  set = (value: any) => {
    localStorage.setItem(this.name, JSON.stringify(value))
  }
}
