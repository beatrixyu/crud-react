import React from 'react'
import Product from '../ProductItem/Product'

import './ProductList.css'

const ProductList =({products})=>{
    if ( ! products.map ) return console.log(products.title)

    return(
        <div className="productList" style={{ display: 'flex', flexWrap:'wrap',  width: '100%', margin:"3%"}}>
             { products && products.map(product => <Product key={product.id} {...product} />)} 
        </div>
    )
}

export default ProductList