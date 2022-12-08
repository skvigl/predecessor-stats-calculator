import React, { useEffect, useMemo, useState } from 'react'
import _ from 'lodash'

import './normalize.css'
import './App.css'

import { Item } from './types'
import { items } from './data/items'
import { HeroBuilds } from './HeroBuilds'
import { Filters } from './components/Filters'
import { Items } from './components/Items/Items'
import { BuildPanel } from './components/BuildPanel/BuildPanel'

const tags = [...new Set(items.flatMap((item) => item.tags))].sort()
const MAX_INVENTORY_SIZE = 6

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

  const handleFilterClick = (event: React.ChangeEvent<HTMLElement>) => {
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

    const newItems = _.filter(inventory, ({ name }) => name !== itemId)
    setInventory(newItems)
    heroBuilds.updateItems(
      activeBuild,
      newItems.map((x) => x.name),
    )
  }

  const finalItems = useMemo(() => {
    if (!filters.length) return items

    return items.filter((item) => {
      if (item.tags.length < filters.length) return false

      return _.size(_.intersection(item.tags, filters)) === _.size(filters)
    })
  }, [filters])

  return (
    <div className="app">
      <aside className="aside">
        <Filters
          tags={tags}
          filters={filters}
          onFilterSelect={handleFilterClick}
        />
      </aside>
      <main className="main">
        <Items
          items={finalItems}
          onItemClick={handleItemDoubleClick}
          onItemDoubleClick={handleItemDoubleClick}
        />
      </main>
      <div className="build-panel">
        <BuildPanel
          inventory={inventory}
          onItemClick={handleInventoryItemDoubleClick}
          onItemDoubleClick={handleInventoryItemDoubleClick}
        />
      </div>
    </div>
  )
}

export default App
