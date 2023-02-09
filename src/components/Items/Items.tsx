import React, { useCallback, useState } from 'react'
import Tippy from '@tippyjs/react'

import './Items.css'
import { userService } from '../../services/implementations'
import { IItem } from '../../types'
import { Thumbnail } from '../Thumbnail'
import { ItemDetails } from '../ItemDetails'
import { ItemCard } from '../ItemCard'
import { useBreakpoint } from '../../hooks'
import { Toggle } from '../Toggle'

interface ItemsProps {
  items: IItem[]
  onItemClick: (event: React.MouseEvent) => void
}

export const Items: React.FC<ItemsProps> = ({ items, onItemClick }) => {
  const [isCompactView, setIsCompactView] = useState(userService.getView() === 'compact')
  const { isMobile } = useBreakpoint()

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

            return (
              <Tippy key={name} placement='right' content={<ItemDetails item={item} />} disabled={isMobile}>
                <Thumbnail name={name} onClick={onItemClick} />
              </Tippy>
            )
          })}
        </div>
      )}

      {!isCompactView && (
        <div className='items-full'>
          {items.map((item) => {
            return (
              <div key={item.name} className='items-full-cell'>
                <Tippy placement='right' content={<ItemDetails item={item} />} disabled={isMobile}>
                  <ItemCard item={item} onClick={onItemClick} />
                </Tippy>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
