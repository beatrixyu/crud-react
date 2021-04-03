import React, { useState, useEffect, useMemo } from 'react';
import ProductList from '../components/ProductList/ProductList'
import Product from '../components/ProductItem/Product'
import CreateProduct from '../components/CreateProduct/CreateProject'
import searchIcon from '../assets/searchIcon.png'
import table from '../assets/table'
import './container.css'

const Container =()=> {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    // console.log(search)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((response) => setProducts(response));
      }, []);

      console.log(products)

     const filteredProducts = useMemo(() => {
         const lowerCaseSearch = search.toLocaleLowerCase();
         if ( ! products ) return [];
        if ( ! search ) return products;
         return products.filter( product =>
                product.title.toLocaleLowerCase().match(lowerCaseSearch) || product.category.toLocaleLowerCase().match(lowerCaseSearch)
              )
         }, [products, search])
         console.log(filteredProducts)

    if ( !filteredProducts) {
          return <p>"Loading..."</p>;
      }
 
    if ( !products ) return 'no products...'

     const handleSearchSubmit = async (e) => {
         e.preventDefault();
     };
    
     const createProduct = (product) => {
        setProducts([{ ...product }, ...products]);
        console.log(...products);
      };
      
      const updateProduct = (e, updatedProduct) => {
         e.preventDefault();
        setProducts(products.map(product =>
          product.id === updatedProduct.id ? updatedProduct : product
        ));
      };

      const removeProduct = (id) =>
      setProducts(products.filter(selectedProduct=> selectedProduct.id !== id));

    return (
    <div className="search">
        <div className="bgImage"></div>

        <form onSubmit={handleSearchSubmit} className='searchForm'>
            <label htmlFor="search-text"><h1></h1></label>
          <br />
            <br/><br/>
            <div className="searchBarInput">
                <input type="text"
                       placeholder="Search items by name or category"
                       id="search-text"
                       value={search}
                       onChange={e => setSearch(e.target.value)}/>
                <img src={searchIcon} alt=""/>
             </div>
        </form> 
        <CreateProduct createProduct={createProduct}/>
        
        <div className="productList">
             { filteredProducts && filteredProducts.map(product => 
             <Product 
                 key={product.id} 
                 {...product} 
                 updateProduct={updateProduct}
                 removeProduct={removeProduct}/>)} 
        {/* <ProductList products={filteredProducts}  ></ProductList> */}
        </div>
        

    </div>
  );
}


export default Container