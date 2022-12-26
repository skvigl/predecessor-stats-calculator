import _ from 'lodash'

import './Toolbar.css'

interface ToolbarProps {
  onBuildClick?: () => void
  onItemClick?: () => void
}

export const Toolbar: React.FC<ToolbarProps> = ({
  onBuildClick = _.identity,
  onItemClick = _.identity,
}) => {
  return (
    <div className="toolbar">
      <button className="toolbar-btn" onClick={onBuildClick}>Build</button>
      <button className="toolbar-btn" onClick={onItemClick}>Item</button>
    </div>
  )
}
