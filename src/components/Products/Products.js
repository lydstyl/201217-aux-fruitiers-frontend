import React, { useState } from 'react'

import { Card } from '../Card/Card'

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
  let hasACategoryChecked = false

  product.node.categories.forEach(pcat => {
    console.log('🚀 ~ hasACategoryInCheckedCategoryNames ~ checkedCategoryNames', checkedCategoryNames)

    console.log('🚀 ~ hasACategoryInCheckedCategoryNames ~ pcat.name', pcat.name)

    console.log('🚀 ~ hasACategoryInCheckedCategoryNames ~ checkedCategoryNames.includes(pcat.name)', checkedCategoryNames.includes(pcat.name))

    if (checkedCategoryNames.includes(pcat.name)) {
      hasACategoryChecked = true
    }
  })

  return hasACategoryChecked
}

function removeUnCheckedProducts (products, checkedCategoryNames) {
//   console.log('🚀 ~ removeUnCheckedProducts ~ checkedCategoryNames', checkedCategoryNames)

  const newProducts = products.filter(p => {
    console.log('🚀 ~ removeUnCheckedProducts ~ p', p)

    console.log('🚀 ~ removeUnCheckedProducts ~ hasACategoryInCheckedCategoryNames(p, checkedCategoryNames)', hasACategoryInCheckedCategoryNames(p, checkedCategoryNames))

    if (hasACategoryInCheckedCategoryNames(p, checkedCategoryNames)) {
      return true
    } else {
      return false
    }
  })

  console.log('🚀 ~ removeUnCheckedProducts ~ newProducts', newProducts)

  return newProducts
}

export const Products = ({ products, categories }) => {
  const [categoriesAndProducts, setCategoriesAndProducts] = useState({ categories: categories.map(c => ({ name: c.node.name, id: c.node.id, checked: true })), products })

  function handleOnChange (evt) {
    const newCategoriesAndProducts = { ...categoriesAndProducts }

    // set categories
    newCategoriesAndProducts.categories = checkOrUncheckCategories(newCategoriesAndProducts.categories, evt.target.name)

    // get an array with the checked category names or empty string ""
    let checkedCategoryNames = getChekedNames(newCategoriesAndProducts.categories)
    // console.log('🚀 ~ handleOnChange ~ checkedCategoryNames', checkedCategoryNames)

    checkedCategoryNames = [...checkedCategoryNames, ''] // add '' so if we forgot to add a category to a product it can't be filtered
    // console.log('🚀 ~ handleOnChange ~ checkedCategoryNames', checkedCategoryNames)

    // set products

    newCategoriesAndProducts.products = removeUnCheckedProducts(newCategoriesAndProducts.products, checkedCategoryNames)

    setCategoriesAndProducts(newCategoriesAndProducts)
  }

  return (
    <>
      <form className='filters'>
        <h3>Filtres</h3>

        {categoriesAndProducts.categories.map(c =>

          <div className='filter' key={c.id}>
            <label>{c.name}</label>

            <input onChange={handleOnChange} type='checkbox' name={c.name} checked={c.checked} value={c.checked} />
          </div>

        )}

        {/* <input type="button" value=""/> */}
      </form>

      <ul className='products'>
        {categoriesAndProducts.products.map(product => (

          <Card key={product.node.id} product={product} />

        ))}
      </ul>
    </>
  )
}
