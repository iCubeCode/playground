import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart: (state, action) => {
            state.cart = action.payload
        }

    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer;


export const getCartCount = (state) => state.cart.cart