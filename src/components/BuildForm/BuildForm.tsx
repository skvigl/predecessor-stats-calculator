import React, { useCallback, useRef, useState } from 'react'
import _ from 'lodash'

import { heroBuildsService } from '../../services/implementations'

import './BuildForm.css'

interface BuildFormProps {
  activeBuild: string
  onSelectBuild?: (name: string) => void
  onCreateBuild?: (name: string) => void
  onRemoveBuild?: (name: string) => void
}

export const BuildForm: React.FC<BuildFormProps> = ({ activeBuild, onSelectBuild, onCreateBuild, onRemoveBuild }) => {
  const buildNames = heroBuildsService.getBuildNames()
  const [isCreateForm, setIsCreateForm] = useState(_.size(buildNames) === 0)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleSelectBuild = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target

      onSelectBuild(value === 'none' ? '' : value)
    },
    [onSelectBuild]
  )

  const handleCreateBuild = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()

      const buildName = inputRef.current?.value

      if (!buildName) return

      inputRef.current.value = ''
      heroBuildsService.addBuild(buildName)
      setIsCreateForm(false)
      onCreateBuild(buildName)
    },
    [onCreateBuild]
  )

  const handleRemoveBuild = useCallback(() => {
    if (!activeBuild) return

    const isConfirmed = window.confirm(`Would you like to delete build: ${activeBuild} ?`)

    if (!isConfirmed) return

    heroBuildsService.removeBuild(activeBuild)

    const newBuildName = _.first(heroBuildsService.getBuildNames())

    if (!newBuildName) {
      setIsCreateForm(true)
    }

    onRemoveBuild(newBuildName)
  }, [activeBuild, onRemoveBuild])

  const handleCreateClick = () => {
    setIsCreateForm(true)
    onSelectBuild('')
  }

  const handleCancelClick = () => {
    setIsCreateForm(_.size(buildNames) === 0)
  }

  return (
    <div>
      {!isCreateForm && (
        <div className='build-form-builds'>
          <select className='build-form-select' onChange={handleSelectBuild} value={activeBuild}>
            <option value=''>Select</option>
            {_.map(buildNames, (buildName) => {
              return (
                <option key={buildName} value={buildName}>
                  {buildName}
                </option>
              )
            })}
          </select>
          {onCreateBuild && (
            <button className='icon-btn' onClick={handleCreateClick}>
              <i className='fa-solid fa-plus'></i>
            </button>
          )}
          {onRemoveBuild && (
            <button className='icon-btn' onClick={handleRemoveBuild}>
              <i className='fa-solid fa-trash'></i>
            </button>
          )}
        </div>
      )}
      {isCreateForm && (
        <form onSubmit={handleCreateBuild}>
          <label>
            <div className='build-form-label'>Name</div>
            <input className='build-form-input' ref={inputRef} type='text' placeholder='Support' />
          </label>
          <div className='build-form-create'>
            <button className='link' onClick={handleCreateBuild}>
              Create
            </button>
            <button className='link' onClick={handleCancelClick} type='button'>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
