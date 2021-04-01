import React, { useState, useEffect, useMemo } from 'react';
import ProductList from '../components/ProductList/ProductList'
import CreateProduct from '../components/CreateProduct/CreateProject'
import searchIcon from '../assets/searchIcon.png'
import './container.css'

const Container =()=> {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    console.log(search)

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
                product.title.toLocaleLowerCase().startsWith(lowerCaseSearch)
              )
         }, [products, search])
         console.log(filteredProducts)

    if ( !filteredProducts) {
          return <p>"Loading..."</p>;
      }
 
    if ( ! products ) return 'no products...'

     const handleSearchSubmit = async (e) => {
         e.preventDefault();
     };
    
     const createProduct = (product) => {
        setProducts([{ ...product }, ...products]);
        console.log(...products);
      };


    return (
    <div className="search">
        <div className="bg__image"></div>
        <form onSubmit={handleSearchSubmit}>
            <label htmlFor="search-text"><h1>How can we help you?</h1></label>
          <br />
            <br/><br/>
            <div className="searchBarInput">
                <input type="text"
                       placeholder=""
                       id="search-text"
                       value={search}
                       onChange={e => setSearch(e.target.value)}/>
                <img src={searchIcon} alt=""/>
             </div>
        </form> 

          <CreateProduct createProduct={createProduct}/>
        
        <div className="productList">
        <ProductList products={filteredProducts}></ProductList>
        </div>
        

    </div>
  );
}


export default Container