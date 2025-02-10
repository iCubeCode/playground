import React from 'react'
import "./EmptyCart.css"
import { MyntraData } from '../../data'
import { useNavigate } from 'react-router-dom'

function EmptyCart() {

    const navigate = useNavigate()

    return (
        <div className='empty_cart'>
            <img src={MyntraData.icons.emptyCart} alt='empty cart' />
            <span>Hey, it feels so light!</span>
            <p>There is nothing in your bag, Let's add some items.</p>
            <button onClick={() => navigate('/products')}>ADD ITEMS</button>
        </div>
    )
}

export default EmptyCart
