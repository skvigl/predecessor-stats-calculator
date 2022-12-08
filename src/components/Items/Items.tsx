import React, { useState } from 'react'

import './Items.css'
import { Item } from '../../types'
import { getImageSrc } from '../../utils'

interface ItemsProps {
  items: Item[]
  onItemClick: (event: React.MouseEvent) => void
  onItemDoubleClick: (event: React.MouseEvent) => void
}

export const Items: React.FC<ItemsProps> = ({
  items,
  onItemClick,
  onItemDoubleClick,
}) => {
  const [isCompactView, setIsCompactView] = useState(false)

  return (
    <div>
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
        <div className="cards">
          {items.map((item) => {
            return (
              <div
                key={item.name}
                className="inventory-item"
                onClick={onItemClick}
                onDoubleClick={onItemDoubleClick}
                data-id={item.name}
              >
                <img
                  className="inventory-image"
                  src={getImageSrc(item.name)}
                  alt=""
                />
              </div>
            )
          })}
        </div>
      )}

      {!isCompactView && (
        <div className="items-full">
          {items.map((item) => {
            return (
              <div key={item.name} className="card-wrap">
                <div
                  className="card"
                  onClick={onItemClick}
                  onDoubleClick={onItemDoubleClick}
                  data-id={item.name}
                >
                  <img className="" src={getImageSrc(item.name)} alt="" />
                  <div className="card-params">
                    {item.stats &&
                      Object.entries(item.stats).map(([key, value]) => {
                        return (
                          <div key={key} className="param">
                            <span className="param-name">+{value}</span>
                            <span>{key}</span>
                          </div>
                        )
                      })}
                  </div>
                  <div className="card-skills-title">Skills</div>
                  <div className="card-skills">
                    {item.skills?.map(({ name, description }) => {
                      return (
                        <div key={name} className="skill">
                          <span className="skill-name">{name}: </span>
                          <span className="skill-description">
                            {description}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
