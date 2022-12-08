import React, { useEffect, useMemo, useState } from 'react'
import _ from 'lodash'

import './App.css'
import { items, Item } from './items'
import { HeroBuilds } from './HeroBuilds'

const tags = [...new Set(items.flatMap((item) => item.tags))].sort()
const MAX_INVENTORY_SIZE = 6

const getImageSrc = (name: string) =>
  `/predecessor-stats-calculator/items/${name.split(' ').join('_')}.png`

const heroBuilds = new HeroBuilds()
heroBuilds.parseLS()
const builds = heroBuilds.getAll()

if (_.isEmpty(builds)) {
  heroBuilds.create('new')
}

function App() {
  const [activeItem, setActiveItem] = useState<Item | null>(null)
  const [inventory, setInventory] = useState<Item[]>([])
  const [filters, setFilters] = useState<string[]>([])
  const [builds, setBuilds] = useState<Object>()
  const [buildName, setBuildName] = useState<string>()
  const [activeBuild, setActiveBuild] = useState<string>('')

  useEffect(() => {
    const builds = heroBuilds.getAll()

    setBuilds(builds)

    if (!_.isEmpty(builds)) {
      const newActiveBuild = _.keys(builds)[0]

      const buldItems = heroBuilds.getItems(newActiveBuild)

      const newInventory = _.reduce<Item, Item[]>(
        items,
        (acc, item) => {
          if (buldItems.includes(item.name)) {
            acc.push(item)
          }

          return acc
        },
        [],
      )

      setActiveBuild(newActiveBuild)
      setInventory(newInventory)
    }
  }, [])

  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    const newFilter = event.currentTarget.dataset.id

    if (!newFilter) return

    if (filters.includes(newFilter)) {
      setFilters([...filters.filter((f) => f !== newFilter)])
      return
    }

    setFilters([...filters, newFilter])
  }

  const handleItemClick = (event: React.MouseEvent<HTMLElement>) => {
    const newItemId = event.currentTarget.dataset.id

    if (!newItemId) return

    const newItem = _.find(items, { name: newItemId })

    if (!newItem) return

    setActiveItem(newItem)
  }

  const handleItemDoubleClick = (event: React.MouseEvent<HTMLElement>) => {
    const newItemId = event.currentTarget.dataset.id
    const isInInventory = _.find(inventory, { name: newItemId })

    if (!newItemId || isInInventory) return

    const newItem = _.find(items, { name: newItemId })

    if (!newItem) return

    const isNewItemCrest = newItem.tags.includes('Crest')
    const hasCrestInInventory = _.find(inventory, ({ tags }) => {
      return tags.includes('Crest')
    })

    if (hasCrestInInventory && isNewItemCrest) {
      const noChrest = inventory.filter(({ tags }) => !tags.includes('Crest'))

      const newItems = [newItem, ...noChrest]
      setInventory(newItems)
      heroBuilds.updateItems(
        activeBuild,
        newItems.map((x) => x.name),
      )
      return
    }

    if (inventory.length === MAX_INVENTORY_SIZE) return

    if (isNewItemCrest) {
      const newItems = [newItem, ...inventory]

      setInventory([newItem, ...inventory])
      heroBuilds.updateItems(
        activeBuild,
        newItems.map((x) => x.name),
      )
      return
    }

    const newItems = [...inventory, newItem]

    setInventory(newItems)
    heroBuilds.updateItems(
      activeBuild,
      newItems.map((x) => x.name),
    )
  }

  const handleInventoryItemDoubleClick = (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    const itemId = event.currentTarget.dataset.id

    if (!itemId) return

    setInventory(_.filter(inventory, ({ name }) => name !== itemId))
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    setBuildName(event.currentTarget.value)
  }

  const handleCreateBuild = () => {
    if (!buildName) return

    heroBuilds.create(buildName)
    setBuilds(heroBuilds.getAll())
  }

  const finalItems = useMemo(() => {
    if (!filters.length) return items

    return items.filter((item) => {
      if (item.tags.length < filters.length) return false

      return _.size(_.intersection(item.tags, filters)) === _.size(filters)
    })
  }, [filters])

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
    <div className="app">
      <aside className="aside">
        <div>
          {_.isEmpty(builds) && (
            <div>
              <input onChange={handleChange} value={buildName ?? ''} />
              <button onClick={handleCreateBuild} disabled={!buildName}>
                Create
              </button>
            </div>
          )}
          {_.keys(builds).map((name) => {
            return <button key={name}>{name}</button>
          })}
        </div>

        <h2 className="inventory-cost">Total: {invCost}</h2>
        <div className="inventory">
          {inventory.map((inv) => {
            return (
              <div
                key={inv.name}
                className="inventory-item"
                onClick={handleItemClick}
                onDoubleClick={handleInventoryItemDoubleClick}
                data-id={inv.name}
              >
                <img className="inventory-image" src={getImageSrc(inv.name)} />
              </div>
            )
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
          {invSkills.map(({ name, description }) => {
            return (
              <div key={name} className="skill">
                <span className="skill-name">{name}: </span>
                <span className="skill-description">{description}</span>
              </div>
            )
          })}
        </div>
      </aside>
      <main className="main">
        <div>
          <h2 className="filter-bar-title">Filters</h2>
          <div className="filters">
            {tags.map((tag) => {
              const isActive = filters.includes(tag)
              return (
                <button
                  key={tag}
                  data-id={tag}
                  onClick={handleFilterClick}
                  className="filter"
                  style={{
                    background: isActive ? '#9dbaf1' : 'white',
                  }}
                >
                  {tag}
                </button>
              )
            })}
          </div>
        </div>
        <h2>Items({finalItems.length})</h2>
        <div className="cards">
          {finalItems.map((item) => {
            return (
              <div
                key={item.name}
                className="inventory-item"
                onClick={handleItemClick}
                onDoubleClick={handleItemDoubleClick}
                data-id={item.name}
              >
                <img className="inventory-image" src={getImageSrc(item.name)} />
              </div>
            )
          })}
        </div>
      </main>
      <div className="item-details">
        {activeItem && (
          <div key={activeItem.name} className="card" data-id={activeItem.name}>
            <div className="card-image-wrap">
              <img className="card-image" src={getImageSrc(activeItem.name)} />
            </div>
            <h3 className="card-title">{activeItem.name}</h3>

            {activeItem.stats && (
              <div className="card-params">
                {Object.entries(activeItem.stats).map(([key, value]) => {
                  return (
                    <div key={key} className="param">
                      <span className="param-name">+{value}</span>
                      <span>{key}</span>
                    </div>
                  )
                })}
              </div>
            )}

            <div className="card-cost">{activeItem.cost}</div>

            <div className="card-skills">
              {activeItem.skills?.map((skill) => {
                return (
                  <div key={skill.name} className="skill">
                    <span className="skill-name">{skill.name}: </span>
                    <span className="skill-description">
                      {skill.description}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
