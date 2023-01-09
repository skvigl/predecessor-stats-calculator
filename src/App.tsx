import React, { useCallback, useEffect, useMemo, useState } from 'react'
import _ from 'lodash'

import './styles/App.css'

import { IItem } from './types'
import { items } from './data/items'
import { heroBuildsService } from './services/implementations'
import { userService } from './services/implementations'
import { Filters } from './components/Filters'
import { Items } from './components/Items'
import { Build } from './components/Builds'
import { useBreakpoint } from './hooks'
import { PanelEnum, Toolbar } from './components/Toolbar'
import { Panel } from './components/Panel'
import { ItemDetails } from './components/ItemDetails'
import { BuildForm } from './components/BuildForm'

function App() {
  const [inventory, setInventory] = useState<IItem[]>([])
  const [filters, setFilters] = useState<string[]>([])
  const [activeBuild, setActiveBuild] = useState<string>(
    userService.getActvieBuild()
  )
  const [activeItem, setActiveItem] = useState<IItem | null>()
  const [activePanelId, setActivePanelId] = useState<PanelEnum | null>()
  const { isMobile } = useBreakpoint()

  useEffect(() => {
    setInventory(heroBuildsService.getItems(activeBuild))

    if (activeBuild !== userService.getActvieBuild()) {
      userService.setActiveBuild(activeBuild)
    }
  }, [activeBuild])

  const handleFilterSelect = (event: React.ChangeEvent<HTMLElement>) => {
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
    setActivePanelId(PanelEnum.item)
  }

  const handleInventoryItemClick = (event: React.MouseEvent<HTMLElement>) => {
    const itemId = event.currentTarget.dataset.id

    if (!itemId) return

    setInventory(heroBuildsService.removeItem(activeBuild, itemId))
  }

  const handleToolbarClick = useCallback(
    (panelId: PanelEnum | null) => {
      setActivePanelId(panelId === activePanelId ? null : panelId)
    },
    [activePanelId]
  )

  const handleClosePanel = useCallback(() => {
    setActivePanelId(null)
  }, [])

  const handleChangeBuild = useCallback((buildName: string) => {
    setActiveBuild(buildName)
  }, [])

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
          <Filters filters={filters} onFilterSelect={handleFilterSelect} />
        </aside>
        <main className="main">
          <Items items={finalItems} onItemClick={handleItemClick} />
        </main>
        {!isMobile && (
          <div className="build-panel">
            <div style={{ padding: '1rem' }}>
              <BuildForm
                activeBuild={activeBuild}
                onSelectBuild={handleChangeBuild}
                onCreateBuild={handleChangeBuild}
                onRemoveBuild={handleChangeBuild}
              />
            </div>
            <Build build={inventory} onItemClick={handleInventoryItemClick} />
          </div>
        )}
        {isMobile && (
          <div className="app-toolbar">
            <Toolbar
              activePanelId={activePanelId}
              onClick={handleToolbarClick}
            />
          </div>
        )}
        {isMobile && activePanelId === PanelEnum.build && (
          <Panel onClose={handleClosePanel}>
            <div style={{ padding: '1rem' }}>
              <h2 className="title">Builds</h2>
              <BuildForm
                activeBuild={activeBuild}
                onSelectBuild={handleChangeBuild}
                onCreateBuild={handleChangeBuild}
                onRemoveBuild={handleChangeBuild}
              />
            </div>
            <Build build={inventory} onItemClick={handleInventoryItemClick} />
          </Panel>
        )}
        {isMobile && activePanelId === PanelEnum.item && (
          <Panel onClose={handleClosePanel}>
            {!activeItem && (
              <h3 style={{ padding: '1rem' }}>Select item from list</h3>
            )}
            {activeItem && <ItemDetails item={activeItem} />}
          </Panel>
        )}
        {isMobile && activePanelId === PanelEnum.filter && (
          <Panel onClose={handleClosePanel}>
            <Filters filters={filters} onFilterSelect={handleFilterSelect} />
          </Panel>
        )}
      </div>
    </div>
  )
}

export default App
