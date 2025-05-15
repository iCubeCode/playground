import { createSlice } from '@reduxjs/toolkit'
import { MyntraData } from '../../data/index'

const initialState = {
    products: MyntraData.products,
    orders: [],
    cart: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

        setProducts: (state, action) => {
            state.products = action.payload
        },
        setOrders: (state, action) => {
            state.orders = action.payload
        },
        setCart: (state, action) => {
            state.cart = action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const { setProducts, setCart, setOrders } = productSlice.actions

export default productSlice.reducer