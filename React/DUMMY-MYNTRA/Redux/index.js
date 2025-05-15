import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer from './Slices/productSlice'

export const store = configureStore({
    reducer: {
        products: ProductsReducer
    },
})