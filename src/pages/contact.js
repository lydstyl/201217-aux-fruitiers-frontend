import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const query = graphql`
  query {
    strapiContact {
      body
    }
  }
`

const Contact = () => (
  <Layout>
    <SEO title='Contact' />

    <StaticQuery
      query={query}
      render={data =>

        // <ReactMarkdown source={data.strapiContact.body} />}
        <ReactMarkdown plugins={[gfm]} children={data.strapiContact.body} />}
    />

    {/* <iframe title='Carte pour trouver Aux Fruitiers de Raismes' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.726888692749!2d3.4837355523298057!3d50.390289579366296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2ee977325a16f%3A0x1658f443aefbd548!2s32%20Rue%20Henri%20Durre%2C%2059590%20Raismes!5e0!3m2!1sen!2sfr!4v1608215719648!5m2!1sen!2sfr' width='100%' height='450' frameBorder='0' style={{ border: '0' }} allowFullScreen='' aria-hidden='false' /> */}

    <div className='back-link'>
      <Link to='/'>Revenir à l'accueil</Link>
    </div>
  </Layout>
)

export default Contact
