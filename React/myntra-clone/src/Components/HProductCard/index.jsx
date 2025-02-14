import React from 'react'
import "./HProductCard.css"
import { useDispatch, useSelector } from 'react-redux'
import { getCartData, getProducts, setCart, setProducts } from '../../Redux/Slices/productSlice'

function HProductCard({
    image,
    brand,
    name,
    price,
    actualPrice,
    discount,
    qty,
    type,
    id,
    data
}) {

    const cart = useSelector(getCartData)
    const products = useSelector(getProducts)
    const dispatch = useDispatch()

    const handleRemove = () => {
        if (type === 'cart') {
            dispatch(setCart(cart.filter((item) => item.id !== id)))
        }
        else {
            dispatch(setProducts(products.map((item) => item.id === id ? { ...item, "wishList": false } : item)))
        }
    }

    const handleChangeQTY = (event) => {

        let value = event.target.value

        dispatch(setCart(cart.map((item) => {
            return item.id === id ? { ...item, "qty": value } : item
        })))

    }

    const handleAddToCart = () => {
        let values = cart.filter(item => item.id === id)

        if (values.length !== 0) {
            // increase qty

            let output = cart.map((item) => {

                return item.id === id ? { ...item, "qty": item.qty + 1 } : item

            })

            dispatch(setCart(output))

        }
        else {
            dispatch(setCart([...cart, data]))
        }
    }

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
                            <select value={qty} onChange={handleChangeQTY}>
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
                        type === 'wishlist' && (
                            <button onClick={handleAddToCart}>Add to Cart</button>
                        )
                    }
                    {
                        type === 'orders' && (
                            <span>Qty: {qty}</span>
                        )
                    }
                </div>
                <div className='h_product_price'>
                    <p>Rs. {price} <del>Rs.{actualPrice}</del> <span>{`(${discount}%) OFF`}</span></p>
                </div>
            </div>
            <div className='h_product_close' onClick={handleRemove}></div>
        </div>
    )
}

export default HProductCard
