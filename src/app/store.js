import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice'
import usersRuducer from '../features/users/usersSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer,       
        users: usersRuducer, 
    }
})