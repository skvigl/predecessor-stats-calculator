import { useState } from 'react'

import { IItem } from '../../types'
import { heroBuildsService } from '../../services/implementations'
import { BuildForm } from '../BuildForm'
import { Builds } from '../Builds'

export const Panel = () => {
  const [activeBuild, setActiveBuild] = useState<string>()
  const [inventory, setInventory] = useState<IItem[]>([])

  const handleChangeBuild = (name: string) => {
    setActiveBuild(name)
    setInventory(heroBuildsService.getItems(name))
  }

  return (
    <div className='build-panel'>
      <div style={{ padding: '1rem' }}>
        <BuildForm activeBuild={activeBuild} onSelectBuild={handleChangeBuild} />
      </div>
      <Builds build={inventory} />
    </div>
  )
}
