import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Products } from '../components/Products/Products'

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
    allStrapiCategory {
      edges {
        node {
          name
          id
          parent {
            id
          }
        }
      }
    }
  }
`

const ProductPage = () => {
  return (

    <Layout>
      <SEO title='Nos produits' />

      <h2>Nos produits</h2>

      <StaticQuery
        query={query}
        render={data => {
          return (

            <Products products={data.allStrapiProduct.edges} categories={data.allStrapiCategory.edges} />

          )
        }}
      />

      <div className='back-link'>
        <Link to='/'>Revenir à l'accueil</Link>
      </div>
    </Layout>

  )
}

export default ProductPage
