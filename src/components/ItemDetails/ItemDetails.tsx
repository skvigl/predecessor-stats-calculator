import { IItem } from '../../types'
import { getImageSrc } from '../../utils'
import { Ability } from '../Ability'
import { Param } from '../Param'
import './ItemDetails.css'

interface ItemDetailsProps {
  item: IItem
}

export const ItemDetails: React.FC<ItemDetailsProps> = ({ item }) => {
  const { name } = item

  return (
    <div className='item-details' data-id={name}>
      <div className='item-details-image-wrap'>
        <img className='item-details-image' src={getImageSrc(name)} alt={name} />
      </div>
      <h3 className='item-details-title'>{name}</h3>

      {item.stats && (
        <div className='item-details-params'>
          {Object.entries(item.stats).map((param) => {
            return <Param key={param[0]} param={param} />
          })}
        </div>
      )}

      {item.cost && <div className='item-details-cost'>{item.cost}</div>}

      {item.abilities?.length && (
        <div className='item-details-abilities'>
          {item.abilities?.map((ability) => {
            return <Ability key={ability.name} ability={ability} />
          })}
        </div>
      )}
    </div>
  )
}
