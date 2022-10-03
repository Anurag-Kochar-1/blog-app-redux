import React from 'react'
import "../App.css"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar-container'>

         {/* <i className="fa-solid fa-pencil navbar-icon"></i>  */}
         <img src="https://th.bing.com/th/id/R.4d404e3b92fbe442e393f51ff223044f?rik=DYs9rF6LyIfo9w&riu=http%3a%2f%2fcliparting.com%2fwp-content%2fuploads%2f2016%2f05%2fPencil-free-to-use-clipart.png&ehk=8S4wo%2fk51uEjJRgDZHSmTVgnz%2fbaEA21nHTMXmG7nvY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" className='navbar-icon' alt="" />

        <h1 className='navbar-title'> My 10x Blogs </h1>
        <Link to={'/createblog'}> <button className='post-blog-btn'>Post Blog</button> </Link>
    </div>
  )
}

export default Navbar