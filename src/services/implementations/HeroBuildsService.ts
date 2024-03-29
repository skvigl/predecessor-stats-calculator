import _ from 'lodash'

import { IItem } from '../../types'
import { LocalStorageServce } from '../implementations/LocalStorageService'
import { HeroBuildMapper } from './HeroBuildMapper'

interface IHeroBuild extends Record<string, string[]> {}

const lsService = new LocalStorageServce<IHeroBuild>('predecessor-hero-builds')
const heroBuildMapper = new HeroBuildMapper()

const MAX_INVENTORY_SIZE = 6
const IGNORE_TAGS = ['Active', 'Consumable', 'Vision']

class HeroBuildsService {
  addBuild = (name: string) => {
    const builds = lsService.get()

    //TODO validate unique?

    _.set(builds, name, [])
    lsService.set(builds)
  }

  removeBuild = (name: string) => {
    const builds = lsService.get()

    _.unset(builds, name)
    lsService.set(builds)
  }

  getBuildNames = () => {
    const builds = lsService.get()

    return _(builds).keys().sortBy().value()
  }

  addItem = (buildName: string, item: IItem) => {
    const savedItems = this.getItems(buildName)
    const shouldIgnore = _.size(_.intersection(item.tags, IGNORE_TAGS)) > 0

    if (shouldIgnore) return savedItems

    if (item.tier === 3 && _.find(savedItems, { name: item.name })) {
      return savedItems
    }

    const isNewItemCrest = item.tags.includes('Crest')
    const hasCrestInInventory = _.find(savedItems, ({ tags }) => {
      return tags.includes('Crest')
    })

    if (hasCrestInInventory && isNewItemCrest) {
      const itemsWithoutCrest = savedItems.filter(({ tags }) => !tags.includes('Crest'))

      const newItems = [item, ...itemsWithoutCrest]

      this.setItems(buildName, newItems)

      return newItems
    }

    if (isNewItemCrest) {
      const newItems = [item, ...savedItems]

      this.setItems(buildName, newItems)
      return newItems
    }

    const maxInventorySize = hasCrestInInventory ? MAX_INVENTORY_SIZE : MAX_INVENTORY_SIZE - 1

    if (savedItems.length === maxInventorySize) {
      return savedItems
    }

    const newItems = [...savedItems, item]
    this.setItems(buildName, newItems)

    return newItems
  }

  removeItem = (buildName: string, itemName: string) => {
    const savedItems = this.getItems(buildName)
    const foundIndex = _.findIndex(savedItems, { name: itemName })

    savedItems.splice(foundIndex, 1)
    this.setItems(buildName, savedItems)

    return savedItems
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

export const heroBuildsService = new HeroBuildsService()
