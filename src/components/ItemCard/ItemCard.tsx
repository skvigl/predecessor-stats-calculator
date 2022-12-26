import React from 'react'
import _ from 'lodash'

import { IItem } from '../../types'
import { getImageSrc } from '../../utils'
import { Param } from '../Param'
import './ItemCard.css'

interface ItemCardProps {
  item: IItem
  forwardedRef?: React.Ref<HTMLDivElement>
  onClick?: (event: React.MouseEvent) => void
}

export const ItemCard: React.FC<ItemCardProps> = ({
  item,
  forwardedRef,
  onClick = _.identity,
}) => {
  return (
    <div
      ref={forwardedRef}
      className="item-card"
      onClick={onClick}
      data-id={item.name}
    >
      <div className="item-card-image-wrap">
        <img className="item-card-image" src={getImageSrc(item.name)} alt="" />
      </div>
      <h4 className="item-card-title">{item.name}</h4>
      {item.stats && (
        <div className="item-card-params">
          {Object.entries(item.stats).map((param) => {
            return <Param key={param[0]} param={param} />
          })}
        </div>
      )}
    </div>
  )
}

export default React.forwardRef<HTMLDivElement, ItemCardProps>((props, ref) => {
  return <ItemCard {...props} forwardedRef={ref} />
})
