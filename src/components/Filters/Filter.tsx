import _ from 'lodash'
import classNames from 'classnames'

import './Filter.css'

interface FilterProps {
  name: string
  isActive?: boolean
  onFilterSelect?: (event: React.ChangeEvent) => void
}

export const Filter: React.FC<FilterProps> = ({
  name,
  isActive = false,
  onFilterSelect = _.identity,
}) => {
  return (
    <label className={classNames('filter', isActive ? 'filter--active' : '')}>
      <input
        className="filter-input"
        type="checkbox"
        value={name}
        checked={isActive}
        onChange={onFilterSelect}
        data-id={name}
      />
      <span>{name}</span>
    </label>
  )
}
