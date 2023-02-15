import React, { useCallback, useState } from 'react'

import './Items.css'
import { userService } from '../../services/implementations'
import { IItem } from '../../types'
import { Thumbnail } from '../Thumbnail'
import { ItemCard } from '../ItemCard'
import { Toggle } from '../Toggle'

interface ItemsProps {
  items: IItem[]
  onItemClick: (event: React.MouseEvent) => void
}

export const Items: React.FC<ItemsProps> = ({ items, onItemClick }) => {
  const [isCompactView, setIsCompactView] = useState(userService.getView() === 'compact')

  const handleChange = useCallback(() => {
    const newIsCompactView = !isCompactView

    userService.setView(newIsCompactView ? 'compact' : 'full')
    setIsCompactView(newIsCompactView)
  }, [isCompactView])

  return (
    <div className='items'>
      <div className='items-top'>
        <h2>Items({items.length})</h2>
        <Toggle label='Compact View' isActive={isCompactView} onChange={handleChange} />
      </div>

      {isCompactView && (
        <div className='items-thumbnails'>
          {items.map((item) => {
            const { name } = item

            return <Thumbnail key={name} name={name} onClick={onItemClick} />
          })}
        </div>
      )}

      {!isCompactView && (
        <div className='items-full'>
          {items.map((item) => {
            return (
              <div key={item.name} className='items-full-cell'>
                <ItemCard item={item} onClick={onItemClick} />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
