import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './Slices/cartSlice'

export const store = configureStore({
    reducer: {
        cart: CartReducer
    }
})