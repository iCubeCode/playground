import React from 'react'
import "./HProductCard.css"

function HProductCard({
    image,
    brand,
    name,
    price,
    actualPrice,
    discount,
    type = 'cart',
    qty,
    closeHandler,
    data,
    handleAddCart,
    handleQty
}) {
    return (
        <div className='h_product_container'>
            <div className='h_product_image'>
                <img src={image} alt={image} />
            </div>
            <div className='h_product_details'>
                <div className='h_product_info'>
                    <span>{brand}</span>
                    <p>{name}</p>
                </div>
                <div className='h_product_qty'>
                    {
                        type === 'cart' && (
                            <select value={qty} onChange={(e) => handleQty(data.id, e.target.value)}>
                                <option value={1}>Qty.1</option>
                                <option value={2}>Qty.2</option>
                                <option value={3}>Qty.3</option>
                                <option value={4}>Qty.4</option>
                                <option value={5}>Qty.5</option>
                                <option value={6}>Qty.6</option>
                                <option value={7}>Qty.7</option>
                                <option value={8}>Qty.8</option>
                                <option value={9}>Qty.9</option>
                                <option value={10}>Qty.10</option>
                            </select>
                        )
                    }
                    {
                        type === 'orders' && (
                            <span>Qty: {qty}</span>
                        )
                    }
                    {
                        type === 'wishlist' && (
                            <button onClick={() => handleAddCart(data)}>Add to Cart</button>
                        )
                    }
                </div>
                <div className='h_product_price'>
                    <p>Rs. {price} <del>Rs.{actualPrice}</del> <span>{`(${discount}%) OFF`}</span></p>
                </div>
            </div>
            {
                type !== 'orders' && (
                    <div className='h_product_close' onClick={() => closeHandler(data.id)}></div>
                )
            }
        </div>
    )
}

export default HProductCard
