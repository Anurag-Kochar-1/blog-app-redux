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
        }
    }
})


export const {add , deleteBlog} = PostBlogSlice.actions

export default PostBlogSlice.reducer