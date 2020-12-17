import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const query = graphql`
  query {
    allStrapiRestaurant {
      edges {
        node {
          strapiId
          name
          description
        }
      }
    }
  }
`

const Products = () => (
  <Layout>
    <SEO title='Nos produits' />

    <h1>Nos produits</h1>

    <StaticQuery
      query={query}
      render={data => (
        <ul>
          {data.allStrapiRestaurant.edges.map(restaurant => (
            <li key={restaurant.node.strapiId}>{restaurant.node.name}</li>
          ))}
        </ul>
      )}
    />

    <Link to='/'>Revenir à l'accueil</Link>
  </Layout>
)

export default Products
