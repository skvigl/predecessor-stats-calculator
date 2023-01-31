import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import _ from 'lodash'

import { heroBuildsService } from '../../services/implementations'
import { heroBuildMapper } from '../../services/implementations/HeroBuildMapper'
import { IItem } from '../../types'
import { Builds } from '../Builds'
import './Share.css'

export const Share = () => {
  const [buildName, setBuildName] = useState<string | undefined>()
  const [inventory, setInventory] = useState<IItem[]>([])
  const [isBuildValid, setIsBuidlValid] = useState(false)
  const [isSaveDisabled, setIsSaveDisabled] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search)

    const name = sp.get('name')
    const items = heroBuildMapper.mapIdsToItems(_.split(sp.get('items'), ','))
    const names = heroBuildsService.getBuildNames()

    setBuildName(name ?? '')
    setInventory(items)
    setIsBuidlValid(name && !_.isEmpty(items))
    setIsSaveDisabled(names.includes(name) || name === '')
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const names = heroBuildsService.getBuildNames()
    const newName = e.target.value

    setBuildName(newName)
    setIsSaveDisabled(names.includes(newName) || newName === '')
  }

  const handleSaveBuild = () => {
    heroBuildsService.addBuild(buildName)

    for (let item of inventory) {
      heroBuildsService.addItem(buildName, item)
    }

    navigate('/')
  }

  if (buildName === undefined) {
    return null
  }

  if (!isBuildValid) {
    return <div className='share-not-valid'>Sorry, build is not valid</div>
  }

  return (
    <div className='share'>
      <div className='share-form'>
        <label>
          <div className='build-form-label'>Build name</div>
          <input className='build-form-input' value={buildName ?? ''} onChange={handleChange} />
        </label>
        <div className='share-controls'>
          <button className='link' onClick={handleSaveBuild} disabled={isSaveDisabled}>
            Save
          </button>
        </div>
      </div>
      <Builds build={inventory} />
    </div>
  )
}
