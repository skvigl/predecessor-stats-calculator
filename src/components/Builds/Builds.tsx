import React, { useMemo } from 'react'
import _ from 'lodash'

import { IItem, TParam } from '../../types'
import { Thumbnail } from '../Thumbnail'
import { Ability } from '../Ability'
import { Param } from '../Param'
import './Builds.css'
import { BUILD_GROUPS } from './contants'

interface BuildsProps {
  build: IItem[]
  onItemClick?: (event: React.MouseEvent) => void
}

export const Builds: React.FC<BuildsProps> = ({ build, onItemClick = _.identity }) => {
  const buildStats = useMemo(() => {
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

  const buildGroups = useMemo(() => {
    const newGroups = _.cloneDeep(BUILD_GROUPS)

    return _.map(newGroups, (group) => {
      return {
        ...group,
        params: _(group.params)
          .map((p): TParam => [p, buildStats[p]])
          .filter((p) => !_.isUndefined(p[1]))
          .value(),
      }
    }).filter((g) => !_.isEmpty(g.params))
  }, [buildStats])

  const buildAbilities = useMemo(() => {
    return build.reduce((acc, item) => {
      if (item.abilities) {
        acc.push(item.abilities)
      }

      return acc
    }, [])
  }, [build])

  return (
    <div className='build'>
      <div className='build-items'>
        {_.map(build, ({ name }) => {
          return <Thumbnail key={name} name={name} onClick={onItemClick} />
        })}
      </div>
      <div className='build-params'>
        {_.map(buildGroups, (group) => {
          return (
            <div key={group.name} className='build-params-group'>
              <div className='build-params-group-name'>{group.name}</div>

              {_.map(group.params, (param) => {
                return <Param key={param[0]} param={param} />
              })}
            </div>
          )
        })}
      </div>

      <div className='build-abilities'>
        {_.map(buildAbilities, (itemAbilities, i) => {
          return (
            <div key={i} className='build-abilities-item'>
              {_.map(itemAbilities, (ability, i) => {
                return <Ability key={ability.name + i} ability={ability} />
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
