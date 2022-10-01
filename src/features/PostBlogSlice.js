import { createSlice } from "@reduxjs/toolkit"
import { FakeData } from "../data/FakeData"


const initialPostBlogStateValue = [{
    id : 0,
    blogTitle : "",
    authorName : "",
    blogContent : ""
}]


export const PostBlogSlice = createSlice({
    name : "PostBlog",
    initialState : {value : FakeData },
    reducers : {
        add : (state , action) => {
            // let action_payload = action.payload
            // state.value = [...state.value , {action_payload }]
            state.value.push(action.payload)
        },

        deleteBlog : (state, action) => {
            state.value = state.value.filter((blog) => 
                blog.id !== action.payload.id
            )
        },

        editBlog : (state, action) => {
            // const {id , blogTitle , authorName , blogContent} = action.payload
            // const existingBlog = state.value.find(blog => blog.id === id)
            // console.log(existingBlog);
            // if(existingBlog) {
            //     existingBlog.blogTitle = blogTitle,
            //     existingBlog.authorName = authorName,
            //     existingBlog.blogContent = blogContent
            // }
            
            const {id , blogTitle , authorName , blogContent} = action.payload
            state.value.map((blu) => {
                if(blu.id === action.payload.id) {
                    console.log('blu', blu);
                    blu.blogTitle = action.payload.blogTitle
                    blu.authorName = action.payload.authorName
                    blu.blogContent = action.payload.blogContent
                }
            })
            
        }
    }
})


export const {add , deleteBlog, editBlog} = PostBlogSlice.actions

export default PostBlogSlice.reducer



// if(existingBlog) {
//     existingBlog.blogTitle = blogTitle,
//     existingBlog.authorName = authorName,
//     existingBlog.blogContent = blogContent
// }