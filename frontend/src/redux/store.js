import {configureStore} from '@reduxjs/toolkit'
import authReducer from './Slices/authSlice'
import UserReducer  from './Slices/User'
export const store = configureStore({
    reducer:{
        authUser : authReducer,
        user : UserReducer
    }
})