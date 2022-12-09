import React, { useMemo } from 'react'

import { Item } from '../../types'
import { getImageSrc } from '../../utils'
import { Thumbnail } from '../Thumbnail/Thumbnail'

interface BuildPanelProps {
  inventory: Item[]
  onItemClick: (event: React.MouseEvent) => void
}

export const BuildPanel: React.FC<BuildPanelProps> = ({
  inventory,
  onItemClick,
}) => {
  const invCost = inventory.reduce((acc, cur) => (acc += cur.cost ?? 0), 0)

  const invStats = useMemo(() => {
    return inventory.reduce<{ [key: string]: number }>((acc, cur) => {
      if (!cur.stats) return acc

      Object.entries(cur.stats).forEach(([key, value]) => {
        if (!acc[key]) {
          acc[key] = value
          return
        }

        acc[key] += value
      })

      return acc
    }, {})
  }, [inventory])

  const invSkills = useMemo(() => {
    return inventory.flatMap((item) => {
      return item.skills ? item.skills : []
    })
  }, [inventory])

  return (
    <div>
      <h2 className="inventory-cost">Total: {invCost}</h2>
      <div className="inventory">
        {inventory.map(({ name }) => {
          return <Thumbnail key={name} name={name} onClick={onItemClick} />
        })}
      </div>
      <div className="inventory-params">
        {Object.entries(invStats).map(([key, value]) => {
          return (
            <div key={key} className="param">
              <span className="param-name">+{value}</span>
              <span>{key}</span>
            </div>
          )
        })}
      </div>

      <div className="inventory-skills">
        {invSkills.map(({ name, description }, i) => {
          return (
            <div key={name + i} className="skill">
              <span className="skill-name">{name}: </span>
              <span className="skill-description">{description}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
