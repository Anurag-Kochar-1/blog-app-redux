import React from 'react'
import "../App.css"

function Blog(props) {
  return (
    <div className={ props.title === undefined ? "blocked-blog" : "blog-container" } >
        <div className='title-box'>
            <h2> {props.title} </h2>
            <span className='trash-icon'>🗑️</span>
            
        </div>

        <div className='blog-context-box'>
            <p>
            {props.blogContent}
            </p>
        </div>

        <div className='author-name-box'>
            <p className='author-name'> @{props.authorName} </p>
            
        </div>
    </div>
  )
}

export default Blog


// <button onClick={() => console.log(props) } > Log Prop </button>