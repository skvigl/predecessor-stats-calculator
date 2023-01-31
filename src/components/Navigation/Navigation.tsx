import { Link } from 'react-router-dom'

import './Navigation.css'

export const Navigation = () => {
  return (
    <nav className='navigation'>
      <div className='container'>
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
      </div>
    </nav>
  )
}
