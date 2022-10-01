import React from 'react'
import { useDispatch } from "react-redux"
import { deleteBlog } from '../features/PostBlogSlice'
import { Link , Navigate, useNavigate} from "react-router-dom"

import "../App.css"

function Blog(props) {


  const dispatch = useDispatch()

  return (
    <div className={ props.title === undefined || props.title.length === 0 ? "blocked-blog" : "blog-container" } >
        <div className='title-box' >
            <h2> {props.title} </h2>
            <span className='trash-icon'
            onClick={() => {
              dispatch(deleteBlog({id : props.id}))
            }}
            
            >🗑️</span>

            <Link to={'/editblog'} state={props} ><span  className='edit-pen-icon'>✏️</span></Link>
            
            
             

            <button onClick={() => console.log(props)} > log props </button>
            
        </div>

        <div className='blog-context-box'>
            <p>
            {props.blogContent}
            </p>
        </div>

        <div className='author-name-box'>
            <p className='author-name'> @{props.authorName} </p>
            <button onClick={() => console.log(props.id)}> Log this ID </button>
            
        </div>
    </div>
  )
}

export default Blog


// <button onClick={() => console.log(props) } > Log Prop </button>