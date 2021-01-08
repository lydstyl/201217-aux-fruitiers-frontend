import React from 'react'

export const Card = ({ product }) => {
  const hasImage = typeof product.node.image[0] === 'object'

  let hasBigImage = false

  let image = false

  if (hasImage) {
    hasBigImage = product.node.image[0].width > 500

    if (hasBigImage) {
      image = <img src={product.node.image[0].formats.small.url} alt={product.node.image[0].alternativeText} />
    } else {
      image = <img src={product.node.image[0].url} alt={product.node.image[0].alternativeText} />
    }
  }

  return (
    <div className='card'>
      <h3>
        {product.node.name}
      </h3>

      {image}

      <p>
        {product.node.description}
      </p>

      <pre>{JSON.stringify(product.node.categories)}</pre>
    </div>
  )
}
