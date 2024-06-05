import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function Header() {

    const { cart } = useContext(CartContext)

    return (
        <div>
            <span>Header</span>
            <span>Cart: {cart}</span>
        </div>
    )
}

export default Header