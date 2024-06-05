import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState(0)

    const addToCart = () => {
        setCart(cart + 1)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )

}