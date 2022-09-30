import React, {useState, useRef} from "react";
import { useDispatch } from "react-redux"
import {add} from "../features/PostBlogSlice"
import { Link , Navigate, useNavigate} from "react-router-dom"
import "../App.css"

function CreateBlog() {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [authorName, setAuthorName] = useState('')
  const[blogContent, setBlogContent] = useState('')

  const titleInputRef = useRef(null)
  const authorNameInputRef = useRef(null)
  const blogContentInputRef = useRef(null)

  const dispatch = useDispatch()


  return (
    <div>
      <div className="create-blog-component-container">
        <div className="create-blog-component">
          <div className="d-flex justify-content-center ">
            <h3 className="create-blog-title"> Post your Blog </h3>
            
          </div>

          <div className="mb-3 margin">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label font-weight"
            >
              Blog title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="add a title..."
              onChange={(e) => setTitle(e.target.value)}
              ref={titleInputRef}
            />
          </div>
          <div className="mb-3 margin">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label font-weight"
            >
              Blog Author Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="add blog author name..."
              onChange={(e) => setAuthorName(e.target.value)}
              ref={authorNameInputRef}
            />
          </div>
          <div className="mb-3 margin">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label font-weight"
            >
              Blog content
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="add blog content..."
              rows="5"
              onChange={(e) => setBlogContent(e.target.value)}
              ref={blogContentInputRef}
            ></textarea>
          </div>
          <div className="d-flex justify-content-center ">

            <button className="btn btn-dark m-2 wd" onClick={() => {
              if(titleInputRef.current.value.length !== 0 && authorNameInputRef.current.value.length !== 0 && blogContentInputRef.current.value.length !== 0){
                dispatch(add({blogTitle : title, authorName : authorName , blogContent : blogContent }))
                setTimeout(() => {
                  navigate('/')
                }, 700);
              } else {
                alert("Empty Fields are not allowed")
              }
              
              
            }} > Post </button>

            <button className="btn btn-danger m-2 wd"
            onClick={() => navigate('/') }
            > Cancel </button>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;



// <button onClick={() => {
//               console.log(blogContentInputRef.current.value.length);
//               console.log(authorName)
//               console.log(blogContent);;
//             }} > LOG ALL state </button>