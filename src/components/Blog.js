import React from 'react'
import "../App.css"

function Blog(props) {
  return (
    <div className={ props.title === undefined ? "blocked-blog" : "blog-container" } >
        <div className='title-box'>
            <h2> {props.title} </h2>
            <span>🗑️</span>
            
        </div>

        <div className='blog-context-box'>
            <p>
            {props.blogContent}
            </p>
        </div>

        <div className='author-box'>
            <p> {props.authorName} </p>
            <button onClick={() => console.log(props) } > Log Prop </button>
        </div>
    </div>
  )
}

export default Blog