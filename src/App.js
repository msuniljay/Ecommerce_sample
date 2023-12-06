import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import products from './db/Data'
import Sidebar from './Sidebar/Sidebar';
import Nav from './Navigation/Nav'
import Products from './Products/products'
import Recommended from './Recommended/Recommended';
function App() {

  const [selectedCategory,setselectedcategory]=useState(null);
  //-------Radio Filtering----
  const handleChange=(event)=>{
    setselectedcategory(event.target.value)
  }

  //-----Button Filtering------
  const handleClick=(event)=>{
      setselectedcategory(event.target.value);
  }

  // ------Input Filter----
  const [query,setquery]=useState('');

  const handleInputChange =(event)=>{
    setquery(event.target.value);
  }
  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  function filteredData(products,selected,query){
     let  filteredProducts = products;

     if(query){
      filteredProducts = filteredItems;
     }

     if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts;


  }
  const result = filteredData(products, selectedCategory, query);



  return (
    <div className="App">
        <Sidebar handleChange={handleChange}/>
        <Nav query={query} handleInputChange={handleInputChange}/>
  
        <Recommended handleClick={handleClick}/>
        <Products result={result}/>

    </div>
  );
}

export default App;
