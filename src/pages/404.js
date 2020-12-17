import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Non trouvé' />

    <h1>404: Page non trouvée</h1>

    <p>Cette adresse n'éxiste pas.</p>
  </Layout>
)

export default NotFoundPage
