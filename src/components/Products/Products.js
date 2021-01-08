import React, { useState } from 'react'

import { Card } from '../Card/Card'

// String.prototype.capitalize = function () {
//   return this.charAt(0).toUpperCase() + this.slice(1)
// }

function checkOrUncheckCategories (categories, targetName) {
  const cats = categories.map(c => ({ ...c, checked: c.name === targetName ? !c.checked : c.checked }))

  return cats
}

function getChekedNames (categories) {
  let checkedNames = categories.map(c => {
    if (c.checked) {
      return c.name
    } else {
      return ''
    }
  })

  checkedNames = checkedNames.filter(c => c !== '')

  return checkedNames
}

function hasACategoryInCheckedCategoryNames (product, checkedCategoryNames) {
  if (!product.node.categories.length) {
    return true
  } else {
    let hasACategoryChecked = false

    product.node.categories.forEach(pcat => {
      if (checkedCategoryNames.includes(pcat.name)) {
        hasACategoryChecked = true
      }
    })

    return hasACategoryChecked
  }
}

function removeUnCheckedProducts (products, checkedCategoryNames) {
  const newProducts = products.filter(p => {
    if (hasACategoryInCheckedCategoryNames(p, checkedCategoryNames)) {
      return true
    } else {
      return false
    }
  })

  return newProducts
}

export const Products = ({ products, categories }) => {
  const originalProducts = products

  const [categoriesAndProducts, setCategoriesAndProducts] = useState({ categories: categories.map(c => ({ name: c.node.name, id: c.node.id, checked: true })), products })

  function handleOnChange (evt) {
    const newCategoriesAndProducts = { ...categoriesAndProducts }

    // set categories
    newCategoriesAndProducts.categories = checkOrUncheckCategories(newCategoriesAndProducts.categories, evt.target.name)

    // get an array with the checked category names or empty string ""
    const checkedCategoryNames = getChekedNames(newCategoriesAndProducts.categories)

    newCategoriesAndProducts.products = removeUnCheckedProducts(originalProducts, checkedCategoryNames)

    setCategoriesAndProducts(newCategoriesAndProducts)
  }

  return (
    <>
      <h3>Filtres</h3>

      <form className='filters'>
        {categoriesAndProducts.categories.map(c =>

          <div className='filter' key={c.id}>
            <label style={{ textTransform: 'capitalize' }}>{c.name}</label>

            <input onChange={handleOnChange} type='checkbox' name={c.name} checked={c.checked} value={c.checked} />
          </div>

        )}

      </form>

      <ul className='products'>
        {categoriesAndProducts.products.map(product => (

          <Card key={product.node.id} product={product} />

        ))}
      </ul>
    </>
  )
}
