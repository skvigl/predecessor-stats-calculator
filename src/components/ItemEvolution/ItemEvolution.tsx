import _ from 'lodash'
import { IItem } from '../../types'

import { Thumbnail } from '../Thumbnail'
import { ItemEvoultionLine } from './ItemEvoultionLine'
import { itemsEvolution } from './utils'
import './ItemEvolution.css'

interface ItemEvolutionProps {
  name: IItem['name']
}

export const ItemEvolution: React.FC<ItemEvolutionProps> = ({ name }) => {
  const itemEvolution = itemsEvolution[name]

  console.log('itemEvolution', itemEvolution)

  if (!itemEvolution) return null

  const renderChildren = (components = []) => {
    return _.map(components, (name, i) => {
      const hadChildren = _.size(itemsEvolution[name]?.components) > 0
      return (
        <div key={name + i} className='item-evolution-column'>
          <Thumbnail name={name} size={5} />
          {hadChildren && (
            <>
              <ItemEvoultionLine isOnlyChild={_.size(itemsEvolution[name]?.components) === 1} />
              <div className='item-evolution-cell'>{renderChildren(itemsEvolution[name].components)}</div>
            </>
          )}
        </div>
      )
    })
  }

  const hasGrowTo = _.size(itemEvolution?.growTo) > 0
  const hasComponents = _.size(itemEvolution?.components) > 0

  if (!hasGrowTo && !hasComponents) return null

  return (
    <div className='item-evolution'>
      {hasGrowTo && (
        <div className='item-evolution-grow'>
          {_.map(itemEvolution.growTo, (itemName) => {
            return <Thumbnail key={name} name={itemName} />
          })}
          <ItemEvoultionLine />
        </div>
      )}
      <div className='item-evolution-base'>
        <Thumbnail name={name} />
      </div>
      {hasComponents && (
        <div>
          <ItemEvoultionLine isOnlyChild={_.size(itemEvolution?.components) === 1} />
          <div className='item-evolution-components'>{renderChildren(itemEvolution?.components)}</div>
        </div>
      )}
    </div>
  )
}
