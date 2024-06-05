import React from 'react'

import { useSelector } from 'react-redux'
import { getCartCount } from '../../redux/Slices/cartSlice'

function Header() {

    const cartCount = useSelector(getCartCount)

    return (
        <div>
            <span>Header</span>
            <span>Cart: {cartCount}</span>
        </div>
    )
}

export default Header