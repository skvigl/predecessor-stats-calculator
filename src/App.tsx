import React, { useCallback, useEffect, useMemo, useState } from 'react'
import _ from 'lodash'

import './styles/App.css'

import { IItem } from './types'
import { items } from './data/items'
import { HeroBuildsService } from './services/implementations/HeroBuildsService'
import { Filters } from './components/Filters'
import { Items } from './components/Items'
import { Build } from './components/BuildPanel'
import { useBreakpoint } from './hooks'
import { Toolbar } from './components/Toolbar'
import { Panel } from './components/Panel'
import { ItemDetails } from './components/ItemDetails'

const tags = [...new Set(items.flatMap((item) => item.tags))].sort()

const heroBuildsService = new HeroBuildsService()

function App() {
  // const [activeItem, setActiveItem] = useState<Item | null>(null)
  const [inventory, setInventory] = useState<IItem[]>([])
  const [filters, setFilters] = useState<string[]>([])
  const [activeBuild, setActiveBuild] = useState<string>('new')
  const [activeItem, setActiveItem] = useState<IItem | null>()
  const [isBuildPanelVisible, setIsBuildPanelVisible] = useState(false)
  const [isItemPanelVisible, setIsItemPanelVisible] = useState(false)
  const { isMobile } = useBreakpoint()

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
    setActiveItem(newItem)
  }

  const handleInventoryItemClick = (event: React.MouseEvent<HTMLElement>) => {
    const itemId = event.currentTarget.dataset.id

    if (!itemId) return

    setInventory(heroBuildsService.removeItem(activeBuild, itemId))
  }

  const handleToolbarBuildClick = useCallback(() => {
    setIsItemPanelVisible(false)
    setIsBuildPanelVisible(!isBuildPanelVisible)
  }, [isBuildPanelVisible])

  const handleToolbarItemClick = useCallback(() => {
    setIsBuildPanelVisible(false)
    setIsItemPanelVisible(!isItemPanelVisible)
  }, [isItemPanelVisible])

  const finalItems = useMemo(() => {
    if (!filters.length) return items

    //newFilters =FilterService.filter(items, filters)

    return items.filter((item) => {
      if (item.tags.length < filters.length) return false

      return _.size(_.intersection(item.tags, filters)) === _.size(filters)
    })
  }, [filters])

  return (
    <div className="container">
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
        {!isMobile && (
          <div className="build-panel">
            <Build build={inventory} onItemClick={handleInventoryItemClick} />
          </div>
        )}
        {isMobile && (
          <div className="app-toolbar">
            <Toolbar
              onBuildClick={handleToolbarBuildClick}
              onItemClick={handleToolbarItemClick}
            />
          </div>
        )}
        {isMobile && isBuildPanelVisible && (
          <Panel>
            <Build build={inventory} onItemClick={handleInventoryItemClick} />
          </Panel>
        )}
        {isMobile && isItemPanelVisible && (
          <Panel>{activeItem && <ItemDetails item={activeItem} />}</Panel>
        )}
      </div>
    </div>
  )
}

export default App
