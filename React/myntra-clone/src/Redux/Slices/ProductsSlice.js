import { createSlice } from '@reduxjs/toolkit'
import { MyntraData } from '../../data/index'

const initialState = {
    cart: [],
    orders: [],
    products: MyntraData.products
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload
        },
        setOrders: (state, action) => {
            state.orders = action.payload
        },
        setProducts: (state, action) => {
            state.products = action.payload
        },
    }
})

// Action creators are generated for each case reducer function
export const { setCart, setOrders, setProducts } = productSlice.actions

export default productSlice.reducer;

export const getCartData = (state) => state.product.cart
export const getOrdersData = (state) => state.product.orders
export const getProductsData = (state) => state.product.products