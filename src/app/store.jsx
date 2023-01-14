import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/AuthUser'


export const store = configureStore({
    reducer: {

        user: authSlice,
    },
})