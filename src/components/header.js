import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="box">

      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          >
          {siteTitle}
        </Link>
      </h1>

      <nav>
        <ul>
          <li>
          <Link to='/produits/'>Nos produits</Link>
          </li>
          <li>
          <Link to='/contact/'>Nous trouver ou nous contacter</Link> <br />

          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
