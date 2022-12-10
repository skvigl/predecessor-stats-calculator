import _ from 'lodash'

import { items } from '../../data/items'
import { Item } from '../../types'

export class HeroBuildMapper {
  mapItemstoIds = (items: Item[]): string[] => {
    return _.map(items, ({ name }) => name)
  }

  mapIdsToItems = (ids: string[]): Item[] => {
    return _.reduce(
      ids,
      (acc, id) => {
        const foundItem = _.find(items, { name: id })
        if (foundItem) {
          acc.push(foundItem)
        }

        return acc
      },
      [],
    )
  }
}
