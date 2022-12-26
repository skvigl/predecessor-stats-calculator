import _ from 'lodash'

import { items } from '../../data/items'
import { IItem } from '../../types'

export class HeroBuildMapper {
  mapItemstoIds = (items: IItem[]): string[] => {
    return _.map(items, ({ name }) => name)
  }

  mapIdsToItems = (ids: string[]): IItem[] => {
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
