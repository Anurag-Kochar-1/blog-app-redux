import React from 'react'
import { Link } from "react-router-dom"
import Blog from '../components/Blog'
import { useSelector } from "react-redux"


function Home() {

  const blogs = useSelector((state) => state.PostBlog.value)

  return (
    <div className='home-page-container'>
      <h1> Home </h1>
        <button> <Link to={'/createblog'} > GO TO CREATE BLOG  </Link> </button>
        <button onClick={() => console.log(blogs) } > LOG blogs </button>

        {blogs.map((blog) => {
          return (
            <div>
              <Blog 
              title = {blog.action_payload?.blogTitle}
              authorName = {blog.action_payload?.authorName}
              blogContent = {blog.action_payload?.blogContent}
              
              />
            </div>
          )
        })}

    </div>
  )
}

export default Home