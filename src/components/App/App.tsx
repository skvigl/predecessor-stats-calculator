import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { useHref } from 'react-router-dom'
import _ from 'lodash'

import './App.css'

import { IItem } from '../../types'
import { items } from '../../data/items'
import { heroBuildsService } from '../../services/implementations'
import { userService } from '../../services/implementations'
import { Filters } from '../Filters'
import { Items } from '../Items'
import { Builds } from '../Builds'
import { useBreakpoint } from '../../hooks'
import { PanelEnum, Toolbar } from '../Toolbar'
import { Panel } from '../Panel'
import { ItemDetails } from '../ItemDetails'
import { BuildForm } from '../BuildForm'

export const App = () => {
  const [inventory, setInventory] = useState<IItem[]>([])
  const [filters, setFilters] = useState<string[]>([])
  const [activeBuild, setActiveBuild] = useState<string>(userService.getActvieBuild())
  const [activeItem, setActiveItem] = useState<IItem | null>()
  const [activePanelId, setActivePanelId] = useState<PanelEnum | null>()
  const { isMobile } = useBreakpoint()
  const href = useHref('/')

  useEffect(() => {
    setInventory(heroBuildsService.getItems(activeBuild))

    if (activeBuild !== userService.getActvieBuild()) {
      userService.setActiveBuild(activeBuild)
    }
  }, [activeBuild])

  const handleFilterSelect = useCallback(
    (filterId: string) => {
      if (filters.includes(filterId)) {
        setFilters([...filters.filter((f) => f !== filterId)])
        return
      }

      setFilters([...filters, filterId])
    },
    [filters]
  )

  const handleFilterClear = useCallback(() => {
    setFilters([])
  }, [])

  const handleItemClick = (event: React.MouseEvent<HTMLElement>) => {
    const newItemId = event.currentTarget.dataset.id

    if (!newItemId || !activeBuild) return

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

  const handleItemEvolutionClick = (itemName: string) => {
    const item = _.find(items, { name: itemName })

    setActiveItem(item)
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

  const handleShareBuild = useCallback(() => {
    const names = _.map(inventory, 'name').join(',')
    const url = `${window.location.origin}${href}/share?name=${activeBuild}&items=${names}`

    navigator.clipboard.writeText(encodeURI(url))
    toast.success('The link to the build has been copied to the clipboard. Use Ctrl+V to paste the link')
  }, [activeBuild, href, inventory])

  const finalItems = useMemo(() => {
    if (!filters.length) return items

    //newFilters =FilterService.filter(items, filters)

    return items.filter((item) => {
      if (item.tags.length < filters.length) return false

      return _.size(_.intersection(item.tags, filters)) === _.size(filters)
    })
  }, [filters])

  return (
    <div className='app'>
      <div className='app-container container'>
        <div className='app-grid'>
          <aside className='aside'>
            <Filters filters={filters} onFilterSelect={handleFilterSelect} onFiltersClear={handleFilterClear} />
          </aside>
          <main className='main'>
            <Items items={finalItems} onItemClick={handleItemClick} />
          </main>
          {!isMobile && (
            <div className='build-panel'>
              <div style={{ padding: '1rem' }}>
                <BuildForm
                  activeBuild={activeBuild}
                  onSelectBuild={handleChangeBuild}
                  onCreateBuild={handleChangeBuild}
                  onRemoveBuild={handleChangeBuild}
                  onShareBuild={handleShareBuild}
                />
              </div>
              <Builds build={inventory} onItemClick={handleInventoryItemClick} />
            </div>
          )}
          {isMobile && (
            <div className='app-toolbar'>
              <Toolbar activePanelId={activePanelId} onClick={handleToolbarClick} />
            </div>
          )}
          {isMobile && activePanelId === PanelEnum.build && (
            <Panel onClose={handleClosePanel}>
              <div style={{ padding: '1rem' }}>
                <h2 className='title'>Builds</h2>
                <BuildForm
                  activeBuild={activeBuild}
                  onSelectBuild={handleChangeBuild}
                  onCreateBuild={handleChangeBuild}
                  onRemoveBuild={handleChangeBuild}
                  onShareBuild={handleShareBuild}
                />
              </div>
              <Builds build={inventory} onItemClick={handleInventoryItemClick} />
            </Panel>
          )}
          {activePanelId === PanelEnum.item && (
            <Panel onClose={handleClosePanel}>
              {!activeItem && <h3 style={{ padding: '1rem' }}>Select item from list</h3>}
              {activeItem && <ItemDetails item={activeItem} onItemEvoultionClick={handleItemEvolutionClick} />}
            </Panel>
          )}
          {isMobile && activePanelId === PanelEnum.filter && (
            <Panel onClose={handleClosePanel}>
              <Filters filters={filters} onFilterSelect={handleFilterSelect} onFiltersClear={handleFilterClear} />
            </Panel>
          )}
        </div>
      </div>
    </div>
  )
}
