import classNames from 'classnames'
import _ from 'lodash'

import './Toolbar.css'

export enum PanelEnum {
  build = 'builds',
  item = 'item',
  filter = 'filters',
}

interface ToolbarProps {
  activePanelId: PanelEnum
  onClick?: (panel: PanelEnum | null) => void
}

const buttons = [PanelEnum.build, PanelEnum.filter]

export const Toolbar: React.FC<ToolbarProps> = ({ activePanelId, onClick = _.identity }) => {
  const getActiveClass = (panelId: PanelEnum) => {
    return panelId === activePanelId ? 'toolbar-btn--active' : ''
  }

  return (
    <div className='toolbar'>
      {_.map(buttons, (button) => {
        return (
          <button
            key={button}
            className={classNames('toolbar-btn', getActiveClass(button))}
            onClick={() => onClick(button)}
          >
            {_.capitalize(button)}
          </button>
        )
      })}
    </div>
  )
}
