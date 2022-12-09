import { ChangeEvent } from 'react'
import './Filters.css'

interface IFilterProps {
  tags: string[]
  filters: string[]
  onFilterSelect: (event: React.ChangeEvent) => void
}

export const Filters: React.FC<IFilterProps> = ({ tags, filters, onFilterSelect }) => {
  return (
    <div>
      <h2 className="filters">Filters</h2>
      <div className="filters">
        {tags.map((tag) => {
          const isActive = filters.includes(tag)
          return (
            <div key={tag}>
              <label className="filter">
                <input
                  type="checkbox"
                  value={tag}
                  checked={isActive}
                  onChange={onFilterSelect}
                  data-id={tag}
                />
                <span>{tag}</span>
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}
