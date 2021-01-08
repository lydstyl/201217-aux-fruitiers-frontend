import React from 'react'
import ReactMarkdown from 'react-markdown'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const query = graphql`
  query {
    strapiHome {
      body
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title='Accueil' />

    <StaticQuery
      query={query}
      render={data =>
        <ReactMarkdown source={data.strapiHome.body} />}
    />

    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
