import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

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

    <h1>Nos produits</h1>

    <StaticQuery
      query={query}
      render={data => (
        <ul>
          {data.allStrapiProduct.edges.map(product => (
            <li key={product.node.strapiId}>
              <h3>
                {product.node.name}
              </h3>

              <p>
                {product.node.description}
              </p>

              {/* <img src={`http://localhost:1337${product.node.image[0].url}`} alt={product.node.image[0].alternativeText} /> */}

              <pre>{JSON.stringify(product.node.image[0], null, 4)}</pre>

              {product.node.image[0].width > 500

                ? <img src={product.node.image[0].formats.small.url} alt={product.node.image[0].alternativeText} />
                : <img src={product.node.image[0].url} alt={product.node.image[0].alternativeText} />}

            </li>
          ))}
        </ul>
      )}
    />

    <Link to='/'>Revenir à l'accueil</Link>
  </Layout>
)

export default Products
