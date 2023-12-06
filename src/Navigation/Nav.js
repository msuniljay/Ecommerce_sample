import React from 'react'
import './Nav.css'
import { useState } from 'react';
 import {FiHeart} from 'react-icons/fi';
import {AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/ai';
const Nav = ({query,handleInputChange}) => {
    
  return (
    <div>
 <nav>
    <div className='nav-container'> 
    <input
      type='text'
      placeholder='Enter text'
      value={query}
      onChange={handleInputChange}
    />
    </div>
    <div className = 'profile-container'>
        <a href='#'>
          <FiHeart className='nav-icons'/>
        </a>
        <a href='#'>
          <AiOutlineShoppingCart className='nav-icons'/>
        </a>
        <a href="#">
          <AiOutlineUserAdd className = 'nav-icons'/>
        </a>
    </div>
</nav>
    </div>
  )
}
export default Nav;
