import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { ComparePage } from './pages/ComparePage'
import { SharePage } from './pages/SharePage'

import 'tippy.js/dist/tippy.css'

import './styles/normalize.css'
import './styles/Tippy.css'
import './styles/index.css'
import './fontawesome/css/fontawesome.css'
import './fontawesome/css/brands.css'
import './fontawesome/css/solid.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/compare',
    element: <ComparePage />,
  },
  {
    path: '/share',
    element: <SharePage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
