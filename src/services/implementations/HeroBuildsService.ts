import _ from 'lodash'

import { Item } from '../../types'
import { LocalStorageServce } from '../implementations/LocalStorageService'
import { HeroBuildMapper } from './HeroBuildMapper'

const lsService = new LocalStorageServce('predecessor-hero-builds')
const heroBuildMapper = new HeroBuildMapper()

interface IHeroBuilds {
  [key: string]: string[]
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
    const savedItems = this.getItems(buildName)

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

      this.setItems(buildName, newItems)

      return newItems
    }

    if (isNewItemCrest) {
      const newItems = [item, ...savedItems]

      this.setItems(buildName, newItems)
      return newItems
    }

    const maxInventorySize = hasCrestInInventory
      ? MAX_INVENTORY_SIZE
      : MAX_INVENTORY_SIZE - 1

    if (savedItems.length === maxInventorySize) {
      return savedItems
    }

    const newItems = [...savedItems, item]
    this.setItems(buildName, newItems)

    return newItems
  }

  removeItem = (buildName: string, itemId: string) => {
    const saveItems = this.getItems(buildName)
    const newItems = _.filter(saveItems, ({ name }) => name !== itemId)

    this.setItems(buildName, newItems)

    return newItems
  }

  getItems = (buildName: string) => {
    const builds = this.parse(lsService.get())

    return heroBuildMapper.mapIdsToItems(builds[buildName])
  }

  setItems = (buildName: string, items: Item[]) => {
    if (!buildName) return

    const builds = this.parse(lsService.get())

    builds[buildName] = heroBuildMapper.mapItemstoIds(items)

    lsService.set(builds)
  }
}
