import _ from 'lodash'

import './Toolbar.css'

export enum PanelEnum {
  'build',
  'item',
  'filter',
}

interface ToolbarProps {
  onClick?: (panel: PanelEnum | null) => void
}

export const Toolbar: React.FC<ToolbarProps> = ({ onClick = _.identity }) => {
  return (
    <div className="toolbar">
      <button className="toolbar-btn" onClick={() => onClick(PanelEnum.build)}>
        Build
      </button>
      <button className="toolbar-btn" onClick={() => onClick(PanelEnum.item)}>
        Item
      </button>
      <button className="toolbar-btn" onClick={() => onClick(PanelEnum.filter)}>
        Filter
      </button>
    </div>
  )
}
