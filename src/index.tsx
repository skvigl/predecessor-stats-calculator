import React from 'react'
import ReactDOM from 'react-dom/client'
import 'tippy.js/dist/tippy.css'

import './styles/normalize.css'
import './styles/Tippy.css'
import './styles/index.css'
import './fontawesome/css/fontawesome.css'
import './fontawesome/css/brands.css'
import './fontawesome/css/solid.css'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
