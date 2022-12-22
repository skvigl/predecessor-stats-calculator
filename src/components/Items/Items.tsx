import React, { useState } from 'react'
import Tippy from '@tippyjs/react'

import './Items.css'
import { Item } from '../../types'
import { Thumbnail } from '../Thumbnail'
import { ItemDetails } from '../ItemDetails'
import { ItemCard } from '../ItemCard'

interface ItemsProps {
  items: Item[]
  onItemClick: (event: React.MouseEvent) => void
}

export const Items: React.FC<ItemsProps> = ({ items, onItemClick }) => {
  const [isCompactView, setIsCompactView] = useState(false)

  return (
    <div className='items'>
      <div className="items-top">
        <h2>Items({items.length})</h2>
        <div>
          <label>
            <input
              type="checkbox"
              checked={isCompactView}
              onChange={() => setIsCompactView(!isCompactView)}
            />
            Compact View
          </label>
        </div>
      </div>

      {isCompactView && (
        <div className="items-thumbnails">
          {items.map((item) => {
            const { name } = item

            return (
              <Tippy
                key={name}
                placement="right"
                content={<ItemDetails item={item} />}
              >
                <Thumbnail name={name} onClick={onItemClick} />
              </Tippy>
            )
          })}
        </div>
      )}

      {!isCompactView && (
        <div className="items-full">
          {items.map((item) => {
            return (
              <div key={item.name} className="items-full-cell">
                <Tippy placement="right" content={<ItemDetails item={item} />}>
                  <ItemCard item={item} />
                </Tippy>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
