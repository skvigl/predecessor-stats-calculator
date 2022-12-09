import _ from 'lodash'

import { Item } from '../../types'
import { LocalStorageServce } from '../implementations/LocalStorageService'

const lsService = new LocalStorageServce('predecessor-hero-builds')

interface IHeroBuilds {
  [key: string]: Item[]
}

const MAX_INVENTORY_SIZE = 6

export class HeroBuildsService {
  private parse = (stringData: string): IHeroBuilds => {
    try {
      const builds = JSON.parse(stringData)

      return builds === null ? {} : builds
    } catch {
      return {}
    }
  }

  addItem = (buildName: string, item: Item) => {
    const builds = this.parse(lsService.get())
    const savedItems = builds[buildName] ?? []

    if (_.find(savedItems, { name: item.name })) {
      return savedItems
    }

    const isNewItemCrest = item.tags.includes('Crest')
    const hasCrestInInventory = _.find(savedItems, ({ tags }) => {
      return tags.includes('Crest')
    })

    if (hasCrestInInventory && isNewItemCrest) {
      const itemsWithoutCrest = savedItems.filter(
        ({ tags }) => !tags.includes('Crest'),
      )

      const newItems = [item, ...itemsWithoutCrest]

      lsService.set({ [buildName]: newItems })
      return newItems
    }

    if (isNewItemCrest) {
      const newItems = [item, ...savedItems]

      lsService.set({ [buildName]: newItems })
      return newItems
    }

    const maxInventorySize = hasCrestInInventory
      ? MAX_INVENTORY_SIZE
      : MAX_INVENTORY_SIZE - 1

    if (savedItems.length === maxInventorySize) {
      return savedItems
    }

    const newItems = [...savedItems, item]
    lsService.set({ [buildName]: newItems })

    return newItems
  }

  removeItem = (buildName: string, itemId: string) => {
    const builds = this.parse(lsService.get())
    const newItems = _.filter(builds[buildName], ({ name }) => name !== itemId)

    lsService.set({ [buildName]: newItems })

    return newItems
  }

  getItems = (buildName: string) => {
    const builds = this.parse(lsService.get())

    return builds[buildName] ?? []
  }

  setItems = (buildName: string, items: Item[]) => {
    if (!buildName) return

    const builds = this.parse(lsService.get())

    builds[buildName] = items

    lsService.set(builds)
  }
}
