import { createSlice } from '@reduxjs/toolkit'
import { MyntraData } from '../../data'

const initialState = {
    products: MyntraData.products,
    orders: [],
    cart: []
}

export const productsSlice = createSlice({
    name: 'products',
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
export const { setProducts, setOrders, setCart } = productsSlice.actions

export default productsSlice.reducer;

export const getProducts = (state) => state.products.products

export const getCartData = (state) => state.products.cart

export const getOrdersData = (state) => state.products.orders