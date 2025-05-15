import React from 'react'
import "./HProductCard.css"
import { useDispatch, useSelector } from 'react-redux'
import { setCart, setProducts } from '../../Redux/Slice/productSlice'

function HProductCard({
    data,
    type
}) {

    const dispatch = useDispatch()

    const cart = useSelector(state => state.product.cart)
    const products = useSelector(state => state.product.products)

    const handleRemoveItem = () => {
        if (type === 'cart') {
            dispatch(setCart(cart.filter((item) => item.id !== data.id)))
        }
        else {
            dispatch(setProducts(products.map((item) => item.id === data.id ? { ...item, "wishList": false } : item)))
        }

    }


    const handleQty = (event) => {

        let values = cart.map((item) => {
            if (item.id === data.id) {
                return { ...item, "qty": parseInt(event.target.value) }
            }
            else {
                return item
            }
        })

        dispatch(setCart(values))

    }

    const handleAddToCart = () => {

        if (cart.length === 0) {
            dispatch(setCart([data]))
            return
        }

        let isExists = cart.filter((item) => item.id === data.id)

        if (isExists.length === 0) {
            // doesn't exists
            dispatch(setCart([...cart, data]))
        }
        else {
            // it exists
            let values = cart.map((item) => {
                if (item.id === data.id) {
                    return { ...item, "qty": item.qty + 1 }
                }
                else {
                    return item
                }
            })

            dispatch(setCart(values))
        }


    }

    return (
        <div className='h_product_container'>
            <div className='h_product_image'>
                <img src={data.imgURIs[0]} alt={data.imgURIs[0]} />
            </div>
            <div className='h_product_details'>
                <div className='h_product_info'>
                    <span>{data.brand}</span>
                    <p>{data.name}</p>
                </div>
                <div className='h_product_qty'>
                    {
                        type === 'cart' && (
                            <select value={data.qty} onChange={handleQty}>
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
                            <span>Qty. {data.qty}</span>
                        )
                    }
                    {
                        type === 'wishlist' && (
                            <button onClick={handleAddToCart}>Add to Cart</button>
                        )
                    }

                </div>
                <div className='h_product_price'>
                    <p>Rs. {data.price} <del>Rs.{data.MRP}</del> <span>{`(${data.discount}%) OFF`}</span></p>
                </div>
            </div>
            {
                type !== 'orders' && (
                    <div className='h_product_close' onClick={handleRemoveItem}></div>
                )
            }
        </div>
    )
}

export default HProductCard
