import { Link } from 'react-router-dom'

import './Navigation.css'

export const Navigation = () => {
  return (
    <div className='container'>
      <nav className='navigation'>
        <ul className='navigation-list'>
          <li>
            <Link className='navigation-link' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='navigation-link' to='/compare'>
              Compare
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
