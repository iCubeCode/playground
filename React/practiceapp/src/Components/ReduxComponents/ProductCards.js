import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getCartCount } from '../../redux/Slices/cartSlice'

function ProductCards() {

    const dispatch = useDispatch()
    const cartCount = useSelector(getCartCount)

    return (
        <div>
            <span>Prodct</span>
            <button onClick={() => {
                dispatch(addToCart(cartCount + 1))
            }}>Add to Cart</button>
        </div>
    )
}

export default ProductCards