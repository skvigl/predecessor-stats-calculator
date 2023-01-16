import _ from 'lodash'

import { FILTER_GROUPS } from './constants'
import { Filter } from './Filter'

import './Filters.css'

interface IFilterProps {
  filters: string[]
  onFilterSelect: (filterId: string) => void
  onFiltersClear: () => void
}

export const Filters: React.FC<IFilterProps> = ({ filters, onFilterSelect, onFiltersClear }) => {
  const handleClearClick = (event: React.ChangeEvent<HTMLElement>) => {
    const newFilter = event.currentTarget.dataset.id

    if (!newFilter) return

    onFilterSelect(newFilter)
  }

  const handleFiltersClear = () => {
    onFiltersClear()
  }

  return (
    <div className='filters'>
      <h2 className='title filters-title'>
        <span>Filters</span>
        {!_.isEmpty(filters) && (
          <button className='filters-clear link' type='button' onClick={handleFiltersClear}>
            (Clear)
          </button>
        )}
      </h2>
      <div>
        {Object.entries(FILTER_GROUPS).map(([name, groupFilters]) => {
          return (
            <div key={name} className='filters-group'>
              {_.map(groupFilters, (groupFilter) => {
                const isActive = filters.includes(groupFilter)

                return (
                  <div key={groupFilter} className='filters-item'>
                    <Filter name={groupFilter} isActive={isActive} onFilterSelect={handleClearClick} />
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
