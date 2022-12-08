export class HeroBuilds {
  builds: Record<string, string[]> = {}

  getAll = () => {
    return this.builds
  }

  create = (id: string) => {
    this.builds[id] = []

    this.updateLS()
  }

  remove = (id: string) => {
    console.log('remove')
  }

  parseLS = () => {
    const dataString = localStorage.getItem('predecessor-hero-builds')

    try {
      if (!dataString) return

      this.builds = JSON.parse(dataString)
    } catch (err) {
      console.log('Can not parse Local Storage')
    }
  }

  updateLS = () => {
    localStorage.setItem('predecessor-hero-builds', JSON.stringify(this.builds))
  }

  getItems = (buildName: string) => {
    return this.builds[buildName] ?? []
  }

  updateItems = (buildName: string, items: string[]) => {
    // console.log('updateItems', buildName, items)

    if (!buildName) return

    this.builds[buildName] = items

    this.updateLS()
  }
}
