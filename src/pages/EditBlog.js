import React, {useState} from 'react'
import { Link , useLocation , useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux"
import { editBlog } from '../features/PostBlogSlice'


function EditBlog() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const location = useLocation()
    const [newTitle , setNewTitle] = useState(location.state.title)
    const [newAuthorName , setNewAuthorName] = useState(location.state.authorName)
    const [newBlogContent, setNewBlogContent] = useState(location.state.blogContent)

    // const [newTitle , setNewTitle] = useState()
    // const [newAuthorName , setNewAuthorName] = useState()
    // const [newBlogContent, setNewBlogContent] = useState()

  return (
    <div>
        <div className="create-blog-component-container">
        <div className="create-blog-component">
          <div className="d-flex justify-content-center ">
            <h3 className="create-blog-title"> Edit your Blog </h3>
            
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
            //   placeholder="add a title..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              
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
            //   placeholder="add blog author name..."
            value={newAuthorName}
            onChange={(e) => setNewAuthorName(e.target.value)}
              
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
            //placeholder="add blog content..."
                value={newBlogContent}
              rows="5"
              onChange={(e) => setNewBlogContent(e.target.value)}
              
            ></textarea>
          </div>
          <div className="d-flex justify-content-center ">

            <button className="btn btn-dark m-2 wd" 
            onClick={() => {
                dispatch(editBlog( {  
                    // blogTitle : location.state.title , 
                    // authorName : location.state.authorName , 
                    // blogContent : location.state.blogContent 
                    id : location.state.id ,
                    blogTitle : newTitle , 
                    authorName : newAuthorName , 
                    blogContent : newBlogContent 
                
                } ))
                setTimeout(() => {
                    navigate('/')
                }, 1000);
            } }
            
            > Update </button>

            <Link to={'/'}> <button className="btn btn-danger m-2 wd"> Cancel </button> </Link> 


            {/* <button onClick={() => console.log(location.state)} > LOG location ID </button> */}
            {/* <h1> LOCATION ID :  {location.state.id} </h1> */}
            {/* <p> NEW STATES :  {newTitle}  {newAuthorName}  {newBlogContent} </p> */}

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditBlog