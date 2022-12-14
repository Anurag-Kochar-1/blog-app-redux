import React from 'react'
import { Link } from "react-router-dom"
import Blog from '../components/Blog'
import { useSelector } from "react-redux"



function Home() {

  // Russain Pallete
  function randomColorID () {
    const rpsChoice = ['lighpurple', 'pink', 'yellow', "darkblue" , "lightorange" , "lighblue", "darkpink", "lightgrey"]
    const randomNumber= Math.floor(Math.random () * 8)
    return rpsChoice[randomNumber]
    
  }

  const blogs = useSelector((state) => state.PostBlog.value)

  return (
    <div className='home-page-container'>
        {/* <button onClick={() => console.log(blogs) } > LOG ALL blogs </button> */}

        {blogs.map((blog, index) => {
          return (
            <>
              <div key={index}>
                <Blog 
                // title = {blog.action_payload?.blogTitle}
                // authorName = {blog.action_payload?.authorName}
                // blogContent = {blog.action_payload?.blogContent}
                title = {blog.blogTitle}
                authorName = {blog.authorName}
                blogContent = {blog.blogContent}
                id = {blog.id}
                // id2 = {blog.id}
                // id = {index}
                randomColorID = {randomColorID}
                />
              </div>


              
            </>
          )
        })}

    </div>
  )
}

export default Home