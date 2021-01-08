import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Card } from '../components/Card/Card'

const query = graphql`
  query {
    allStrapiProduct {
      edges {
        node {
          id
          name
          description
          categories {
            name
          }
          image {
            url
            name
            alternativeText
            caption
            width
            formats {
              small {
                url
              }
            }
          }
        }
      }
    }
  }
`

const Products = () => (
  <Layout>
    <SEO title='Nos produits' />

    <h2>Nos produits</h2>

    <StaticQuery
      query={query}
      render={data => {
        return (
          <ul className='products'>
            {data.allStrapiProduct.edges.map(product => (

              <Card key={product.node.id} product={product} />

            ))}
          </ul>
        )
      }}
    />

    <Link to='/'>Revenir à l'accueil</Link>
  </Layout>
)

export default Products
