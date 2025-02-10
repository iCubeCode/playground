import React, { useEffect, useState } from 'react'
import "./Cart.css"
import EmptyCart from '../../Components/EmptyCart'
import { useDispatch, useSelector } from 'react-redux'
import { getCartData, getOrdersData, setCart, setOrders } from '../../Redux/Slices/ProductsSlice'
import HProductCard from '../../Components/HProductCard'

function Cart() {

    const dispatch = useDispatch()
    const cart = useSelector(getCartData)
    const orders = useSelector(getOrdersData)

    const [totalAmount, setTotalAmount] = useState(0)

    const handlePlaceOrder = () => {
        if (orders.length !== 0) {
            dispatch(setOrders(orders.map((item) => {
                if (cart.filter((val) => val.id === item.id).length !== 0) {
                    return {
                        ...item,
                        "qty": item.qty + cart.filter((val) => val.id === item.id)[0].qty
                    }
                }
                else {
                    return item
                }
            })))
        } else {
            dispatch(setOrders(cart))
        }
        dispatch(setCart([]))
    }

    const handleRemoveItem = (id) => {
        dispatch(setCart(cart.filter(item => item.id !== id)))
    }

    function getTotalAmount(list) {
        if (list.length === 1) {
            return parseInt(list[0].price * list[0].qty)
        } else {
            // return list.reduce((a, b) => (parseInt(a.price) * parseInt(a.qty)) + (parseInt(b.price) * parseInt(b.qty)))
            return list.reduce((a, b) => {
                return a + (parseInt(b.price) * parseInt(b.qty))
            }, 0)
        }
    }

    const handleQty = (id, value) => {
        dispatch(setCart(cart.map((item) => {
            return item.id === id ? { ...item, 'qty': parseInt(value) } : item
        })))
    }

    useEffect(() => {
        setTotalAmount(getTotalAmount(cart))
    }, [cart])

    if (cart.length === 0) {
        return <EmptyCart />
    }

    return (
        <div className='cart_container'>
            <div className='cart_item_section'>
                <div className='cart_delivery_service'>
                    <span>Check delivery time & service</span>
                    <button>ENTER PIN CODE</button>
                </div>
                <div className='cart_items'>
                    <span>{cart.length} ITEMS SELECTED</span>
                    <div className='cart_item_container'>
                        {
                            cart.map((item, index) => {
                                return (
                                    <HProductCard
                                        key={index}
                                        image={item.imgURIs[0]}
                                        brand={item.brand}
                                        name={item.name}
                                        price={item.price}
                                        actualPrice={item.MRP}
                                        discount={item.discount}
                                        qty={item.qty}
                                        closeHandler={handleRemoveItem}
                                        data={item}
                                        handleQty={handleQty}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='cart_bill_section'>
                <div className='cart_bill_coupon'>
                    <span>Apply Coupon</span>
                    <button>APPLY</button>
                </div>
                <div className='cart_bill'>
                    <span>PRICE DETAILS (1 item)</span>
                    <table>
                        <tr>
                            <td>Total MRP</td>
                            <td></td>
                            <td>₹{totalAmount}</td> {/* Reducer function*/}
                        </tr>
                        <tr>
                            <td>Platform free</td>
                            <td></td>
                            <td>₹0</td>
                        </tr>
                        <tr>
                            <td>Shipping free</td>
                            <td></td>
                            <td>₹0</td>
                        </tr>
                        <tr className='total_amount'>
                            <td>Total Amount</td>
                            <td></td>
                            <td>₹{totalAmount}</td> {/* Reducer function*/}
                        </tr>
                    </table>
                    <button onClick={handlePlaceOrder}>PLACE ORDER</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
