import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './Slices/ProductsSlice'

export const store = configureStore({
    reducer: {
        product: ProductReducer
    },
})