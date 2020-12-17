import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Accueil' />

    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>

    <Link to='/produits/'>Nos produits</Link> <br />

    <Link to='/contact/'>Nous trouver ou nous contacter</Link> <br />

    {/* <Link to='/using-typescript/'>Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
