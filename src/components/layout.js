/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Header from './header'
import './layout.scss'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />

      <main>{children}</main>

      <footer>
        <div className='find-us'>
          <Link to='/contact/'>Contactez </Link>nous !
        </div>

        <div className='contact-dev'>
          Besoin d'une web app ? <a target='_blank' rel='noreferrer' href='https://www.developpeur-react-nord.com/'>Contactez le développeur !</a>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
