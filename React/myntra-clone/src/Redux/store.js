import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './Slice/productSlice'

export const store = configureStore({
    reducer: {
        product: ProductReducer
    },
})