import React from 'react'
import "../App.css"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar-container'>
         <i className="fa-solid fa-pencil navbar-icon"></i> 
        <h1 className='navbar-title'>Free blogs</h1>
        <Link to={'/createblog'}> <button className='post-blog-btn'>Post Blog</button> </Link>
    </div>
  )
}

export default Navbar