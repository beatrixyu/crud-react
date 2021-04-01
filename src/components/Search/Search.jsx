import React, { useState, useEffect, useMemo } from 'react';
import ProductList from '../ProductList/ProductList'

import searchIcon from '../../assets/searchIcon.png'
import './Search.css'

const Search =()=> {
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

     const handleSearch = async (e) => {
         e.preventDefault();
     };

    return (
    <div className="search">
        <div className="bg__image"></div>
        <form onSubmit={handleSearch}>
            <label htmlFor="search-text"><h1>How can we help you?</h1></label>
            <br/><br/>
            <div className="searchBarInput">
                <input type="text"
                       placeholder="Search"
                       id="search-text"
                       value={search}
                       onChange={e => setSearch(e.target.value)}/>
                <img src={searchIcon} alt=""/>
             </div>
        </form> 
        <div className="productList">
            product list
            {/* <ProductList products={filteredProducts}/> */}
        </div>
       <ProductList products={filteredProducts}></ProductList>
        

    </div>
  );
}


export default Search