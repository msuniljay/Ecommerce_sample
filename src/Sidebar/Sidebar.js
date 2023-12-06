import React from 'react'
import './Sidebar.css';
import Category from './Category/category';
import Color from './Colors/color';
import Price from './Price/price';
 const Sidebar = ({handleChange }) => {
  return (
    <>
       <section className='sidebar'>
         <div className='logo-container'>
             <h1> Logo </h1>
         </div>

         <Category handleChange={handleChange}/>
         <Price handleChange={handleChange}/>
         <Color handleChange={handleChange}/>

       </section>
    </>
  )
}
export default Sidebar;