import { useState } from 'react'

import './Compare.css'
import { Panel } from './Panel'

export const Compare = () => {
  const [panelCount, setPanelCount] = useState(0)
  const panels = Array(panelCount).fill(null)

  return (
    <div className='compare'>
      <div className='container'>
        <div className='compare-grid'>
          {panels.map((panel, index) => {
            return <Panel key={index} />
          })}
          <div className='compare-add'>
            <button
              className='link'
              onClick={() => {
                setPanelCount(panelCount + 1)
              }}
            >
              <i className='fa-solid fa-plus'></i>
              <span>&nbsp;Add build</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
