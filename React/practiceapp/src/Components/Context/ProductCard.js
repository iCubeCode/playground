import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function ProductCard() {

    const { addToCart } = useContext(CartContext)

    return (
        <div>
            <h3>Product Card</h3>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default ProductCard