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
        <div className='footer-item find-us'>
          <Link to='/contact/'>Trouvez </Link>nous !
        </div>

        <iframe title='Carte pour trouver Aux Fruitiers de Raismes' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.726888692749!2d3.4837355523298057!3d50.390289579366296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2ee977325a16f%3A0x1658f443aefbd548!2s32%20Rue%20Henri%20Durre%2C%2059590%20Raismes!5e0!3m2!1sen!2sfr!4v1608215719648!5m2!1sen!2sfr' width='100%' height='650' frameBorder='0' style={{ border: '0' }} allowFullScreen='' aria-hidden='false' />

        <div className='footer-item contact-dev'>
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
