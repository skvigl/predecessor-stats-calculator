import _ from 'lodash'

import { IItem } from '../../types'
import { LocalStorageServce } from '../implementations/LocalStorageService'
import { HeroBuildMapper } from './HeroBuildMapper'

const lsService = new LocalStorageServce('predecessor-hero-builds')
const heroBuildMapper = new HeroBuildMapper()

const MAX_INVENTORY_SIZE = 6
const IGNORE_TAGS = ['Active', 'Consumable', 'Vision']

export class HeroBuildsService {
  addItem = (buildName: string, item: IItem) => {
    const savedItems = this.getItems(buildName)
    const shouldIgnore = _.size(_.intersection(item.tags, IGNORE_TAGS)) > 0

    if (shouldIgnore) return savedItems

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

  removeItem = (buildName: string, itemName: string) => {
    const saveItems = this.getItems(buildName)
    const newItems = _.filter(saveItems, ({ name }) => name !== itemName)

    this.setItems(buildName, newItems)

    return newItems
  }

  getItems = (buildName: string) => {
    const builds = lsService.get()

    return heroBuildMapper.mapIdsToItems(builds[buildName])
  }

  setItems = (buildName: string, items: IItem[]) => {
    if (!buildName) return

    const builds = lsService.get()

    builds[buildName] = heroBuildMapper.mapItemstoIds(items)

    lsService.set(builds)
  }
}
