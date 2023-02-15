import _ from 'lodash'

import { items } from '../../data/items'
import { IItem } from '../../types'

interface IItemsEvolution {
  [name: string]: {
    growTo: string[]
    components: string[]
  }
}

export const itemsEvolution = _.reduce<IItem, IItemsEvolution>(
  items,
  (acc, cur) => {
    if (!_.size(cur.components)) return acc

    acc[cur.name] = acc[cur.name] ?? {
      growTo: [],
      components: cur.components,
    }

    _.each(cur.components, (itemName) => {
      acc[itemName] = acc[itemName] ?? {
        growTo: [],
        components: [],
      }

      if (!_.includes(acc[itemName].growTo, cur.name)) {
        acc[itemName].growTo.push(cur.name)
      }
    })

    return acc
  },
  {}
)
