import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Logo from '../components/Logo/Logo'

const Header = ({ siteTitle }) => (
  <header>
    <div className='box'>

      <Link
        to='/'
      >
        <h1 style={{ display: 'none' }}>{siteTitle}</h1>

        <Logo />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to='/produits/'>Produits</Link>
          </li>
          <li>
            <Link to='/contact/'>Contact</Link> <br />

          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
