import { PropsWithChildren } from 'react'

import './Panel.css'

export const Panel: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="panel">{children}</div>
}
