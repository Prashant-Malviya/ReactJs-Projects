import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='bg-blue-500'>
      <div className='flex flex-row justify-between'>
        <NavLink to='/'>
        <p className='font-bold text-lg'>MCommerce</p>
        </NavLink>
        
        <div>
        <NavLink to="/">
            <p>Home</p>
        </NavLink>
        
        <NavLink to='/cart'>
        <div>
            <MdShoppingCart />
        </div>
        </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
