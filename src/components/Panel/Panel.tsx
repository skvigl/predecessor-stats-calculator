import { PropsWithChildren } from 'react'

import './Panel.css'

interface PanelProps extends PropsWithChildren {
  onClose?: () => void
}

export const Panel: React.FC<PanelProps> = ({ onClose, children }) => {
  return (
    <div className="panel">
      <button className="panel-close" onClick={onClose}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      {children}
    </div>
  )
}
