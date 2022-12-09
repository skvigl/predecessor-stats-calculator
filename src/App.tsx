import React, { useEffect, useMemo, useState } from 'react'
import _ from 'lodash'

import './styles/App.css'

import { Item } from './types'
import { items } from './data/items'
import { HeroBuildsService } from './services/implementations/HeroBuildsService'
import { Filters } from './components/Filters/Filters'
import { Items } from './components/Items/Items'
import { BuildPanel } from './components/BuildPanel/BuildPanel'

const tags = [...new Set(items.flatMap((item) => item.tags))].sort()

const heroBuildsService = new HeroBuildsService()

function App() {
  const [activeItem, setActiveItem] = useState<Item | null>(null)
  const [inventory, setInventory] = useState<Item[]>([])
  const [filters, setFilters] = useState<string[]>([])
  const [activeBuild, setActiveBuild] = useState<string>('new')

  useEffect(() => {
    setInventory(heroBuildsService.getItems('new'))
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

    setInventory(heroBuildsService.addItem(activeBuild, newItem))
  }

  const handleInventoryItemClick = (event: React.MouseEvent<HTMLElement>) => {
    const itemId = event.currentTarget.dataset.id

    if (!itemId) return

    setInventory(heroBuildsService.removeItem(activeBuild, itemId))
  }

  const finalItems = useMemo(() => {
    if (!filters.length) return items

    //newFilters =FilterService.filter(items, filters)

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
        <Items items={finalItems} onItemClick={handleItemClick} />
      </main>
      <div className="build-panel">
        <BuildPanel
          inventory={inventory}
          onItemClick={handleInventoryItemClick}
        />
      </div>
    </div>
  )
}

export default App
