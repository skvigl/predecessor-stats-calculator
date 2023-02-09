import _ from 'lodash'
import classNames from 'classnames'

import './Toggle.css'

interface ToggleProps {
  label?: string
  isActive?: boolean
  onChange?: () => void
}

export const Toggle: React.FC<ToggleProps> = ({ label, isActive = false, onChange = _.identity }) => {
  return (
    <div className={classNames('toggle', isActive ? 'toggle--active' : '')} onClick={onChange}>
      {Boolean(label) && <div className='toggle-label'>{label}</div>}
      <div className='toggle-trigger'>
        <div className='toggle-ball'></div>
      </div>
    </div>
  )
}
