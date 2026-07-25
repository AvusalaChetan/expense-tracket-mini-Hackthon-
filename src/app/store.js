import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from '../features/AuthSlice'

export const store = configureStore({
    reducer:{
        Auth:AuthReducer
    }
})