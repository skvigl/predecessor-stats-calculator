import _ from 'lodash'

import { FILTER_GROUPS } from './constants'
import { Filter } from './Filter'

import './Filters.css'

interface IFilterProps {
  filters: string[]
  onFilterSelect: (event: React.ChangeEvent) => void
}

export const Filters: React.FC<IFilterProps> = ({
  filters,
  onFilterSelect,
}) => {
  return (
    <div>
      <h2 className="title">Filters</h2>
      <div>
        {Object.entries(FILTER_GROUPS).map(([name, groupFilters]) => {
          return (
            <div key={name} className="filters-group">
              {_.map(groupFilters, (groupFilter) => {
                const isActive = filters.includes(groupFilter)

                return (
                  <div key={groupFilter} className="filters-item">
                    <Filter
                      name={groupFilter}
                      isActive={isActive}
                      onFilterSelect={onFilterSelect}
                    />
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
