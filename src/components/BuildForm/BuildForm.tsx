import { useCallback, useRef, useState } from 'react'
import _ from 'lodash'

import { heroBuildsService } from '../../services/implementations'

import './BuildForm.css'

interface BuildFormProps {
  activeBuild: string
  onSelectBuild: (name: string) => void
  onCreateBuild: (name: string) => void
  onRemoveBuild: (name: string) => void
}

export const BuildForm: React.FC<BuildFormProps> = ({
  activeBuild,
  onSelectBuild,
  onCreateBuild,
  onRemoveBuild,
}) => {
  const [isCreateForm, setIsCreateForm] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleSelectBuild = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onSelectBuild(e.target.value)
    },
    [onSelectBuild]
  )

  const handleCreateBuild = useCallback(() => {
    const buildName = inputRef.current?.value

    if (!buildName) return

    inputRef.current.value = ''
    heroBuildsService.addBuild(buildName)
    setIsCreateForm(false)
    onCreateBuild(buildName)
  }, [onCreateBuild])

  const handleRemoveBuild = useCallback(() => {
    if (!activeBuild) return

    heroBuildsService.removeBuild(activeBuild)

    const newBuildName = _.first(heroBuildsService.getBuildNames())
    onRemoveBuild(newBuildName)
  }, [activeBuild, onRemoveBuild])

  const handleCreateClick = () => {
    setIsCreateForm(true)
  }

  const handleCancelClick = () => {
    setIsCreateForm(false)
  }

  const buildNames = heroBuildsService.getBuildNames()

  return (
    <div>
      {!isCreateForm && (
        <div className="build-form-builds">
          <select
            className="build-form-select"
            onChange={handleSelectBuild}
            value={activeBuild}
          >
            {_.map(buildNames, (buildName) => {
              return (
                <option key={buildName} value={buildName}>
                  {buildName}
                </option>
              )
            })}
          </select>
          <button className="link" onClick={handleCreateClick}>
            <i className="fa-solid fa-plus"></i>
          </button>
          <button className="link" onClick={handleRemoveBuild}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      )}
      {isCreateForm && (
        <div>
          <label>
            <div className="build-form-label">Name</div>
            <input
              className="build-form-input"
              ref={inputRef}
              type="text"
              placeholder="Support"
            />
          </label>
          <div className="build-form-create">
            <button className="link" onClick={handleCreateBuild}>
              Create
            </button>
            <button className="link" onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
