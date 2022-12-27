import { useMemo } from 'react'

import { IItem } from '../../types'
import { Thumbnail } from '../Thumbnail'
import { Ability } from '../Ability'
import { Param } from '../Param'
import './Build.css'

interface BuildProps {
  build: IItem[]
  onItemClick: (event: React.MouseEvent) => void
}

export const Build: React.FC<BuildProps> = ({ build, onItemClick }) => {
  const invCost = build.reduce((acc, cur) => (acc += cur.cost ?? 0), 0)

  const invStats = useMemo(() => {
    return build.reduce<{ [key: string]: number }>((acc, cur) => {
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
  }, [build])

  const invAbilities = useMemo(() => {
    return build.reduce((acc, item) => {
      if (item.abilities) {
        acc.push(item.abilities)
      }

      return acc
    }, [])
  }, [build])

  return (
    <div className='build'>
      {/* <h2 className="build-cost">Total: {invCost}</h2> */}
      <div className="build-items">
        {build.map(({ name }) => {
          return <Thumbnail key={name} name={name} onClick={onItemClick} />
        })}
      </div>
      <div className="build-params">
        {Object.entries(invStats).map((param) => {
          return <Param key={param[0]} param={param} />
        })}
      </div>

      <div className="build-abilities">
        {invAbilities.map((itemAbilities, i) => {
          return (
            <div key={i} className="build-abilities-item">
              {itemAbilities.map((ability, i) => {
                return <Ability key={ability.name + i} ability={ability} />
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
