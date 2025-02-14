import React from 'react'
import "./Cart.css"
import HProductCard from '../../Components/HProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getCartData, setCart, setOrders } from '../../Redux/Slices/productSlice'
import EmptyData from '../../Components/EmptyData'

function Cart() {

    const cart = useSelector(getCartData)

    const dispatch = useDispatch()

    const handlePlaceOrder = () => {

        dispatch(setOrders(cart))
        dispatch(setCart([]))

    }


    if (cart.length === 0) {
        return <EmptyData />
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
                                        type={'cart'}
                                        id={item.id}
                                        data={item}
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
                            <td>₹{getTotalAmount(cart)}</td> {/* Reducer function*/}
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
                            <td>₹{getTotalAmount(cart)}</td> {/* Reducer function*/}
                        </tr>
                    </table>
                    <button onClick={handlePlaceOrder}>PLACE ORDER</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;


function getTotalAmount(list) {

    return list.reduce((a, b) => {
        return a + (parseInt(b.price) * parseInt(b.qty))
    }, 0)

}