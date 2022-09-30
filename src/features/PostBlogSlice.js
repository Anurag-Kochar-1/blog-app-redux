import { createSlice } from "@reduxjs/toolkit"


const initialPostBlogStateValue = [{
    blogTitle : "",
    authorName : "",
    blogContent : ""
}]


export const PostBlogSlice = createSlice({
    name : "PostBlog",
    initialState : {value :initialPostBlogStateValue },
    reducers : {
        add : (state , action) => {
            let action_payload = action.payload
            state.value = [...state.value , {action_payload }]
        }
    }
})


export const {add} = PostBlogSlice.actions

export default PostBlogSlice.reducer