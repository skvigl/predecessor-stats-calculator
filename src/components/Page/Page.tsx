import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Navigation } from '../Navigation'
import './Page.css'

export const Page: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className='page'>
        <Navigation />
        {children}
      </div>
      <ToastContainer position='top-center' theme='dark' />
    </>
  )
}
