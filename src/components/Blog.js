import React from 'react'
import { useDispatch } from "react-redux"
import { deleteBlog } from '../features/PostBlogSlice'
import { Link , Navigate, useNavigate} from "react-router-dom"

// React-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../App.css"


import "../App.css"

function Blog(props) {

  const deleteBlogToast = () => {
    toast.info('🦄 Blog Deleted', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }


  const dispatch = useDispatch()

  return (
    <>
      <div className={ props.title === undefined || props.title.length === 0 ? "blocked-blog" : "blog-container" } id={props.randomColorID()}>
      

          <div className='title-box' >
              <h2> {props.title} </h2>

              <div className="blog-btns-container">
                <span className='trash-icon'
                onClick={() => {
                  dispatch(deleteBlog({id : props.id}))
                  deleteBlogToast()
                }}
                
                >🗑️</span>

                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    className={'deletedBlogToast'}
                />

                

                <Link to={'/editblog'} state={{title: props.title , authorName: props.authorName , blogContent : props.blogContent}} ><span  className='edit-pen-icon'>✏️</span></Link>
              </div>
              
              
              

              {/* <button onClick={() => console.log(props)} > log props </button> */}
              
          </div>

          <div className='blog-context-box'>

              { <p>
              {props.blogContent}

              
              
              </p>}
              {/* <button onClick={() => alert(props.blogContent.length)}> Check Content Lenght</button> */}

          </div>

          <div className='author-name-box'>
              <p className='author-name'> @{props.authorName} </p>
              {/* <button onClick={() => console.log(props.id)}> Log this ID </button> */}
              
          </div>
      </div>

      
    </>
  )
}

export default Blog


// <button onClick={() => console.log(props) } > Log Prop </button>