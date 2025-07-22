import React from 'react'
import { FaShoppingCart, FaSearch } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router'

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-yellow-400 text-black p-4 flex justify-between items-center rounded-lg">
     
      <div className="flex items-center gap-2">
        <NavLink to={"/"}>
        <img
          src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png"
          className="h-15 w-15 rounded-full"
        />
        </NavLink>
      </div>
      <div className="flex items-center bg-white rounded text-black  overflow-hidden">
        <input
          type="text"
          placeholder="Search food..."
          className="px-2 py-1 outline-none w-50 "/>
        <button className="px-3  bg-white text-black mr-5 ">
          <FaSearch />
        </button>
      </div>
      <NavLink to="/Cart"> <FaShoppingCart className="text-2xl cursor-pointer "/></NavLink>
      
    </nav>
    
  )
}

export default Navbar