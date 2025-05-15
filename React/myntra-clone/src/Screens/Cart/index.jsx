import React from 'react'
import "./Cart.css"
import HProductCard from '../../Components/HProductCard'
import { useSelector, useDispatch } from 'react-redux'
import EmptyData from '../../Components/EmptyData'
import { setCart, setOrders } from '../../Redux/Slice/productSlice'

function Cart() {

    const dispatch = useDispatch()

    const cart = useSelector(state => state.product.cart)

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
                                return <HProductCard
                                    data={item}
                                    key={index}
                                    type={'cart'}
                                />
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
                    <span>PRICE DETAILS ({cart.length} item)</span>
                    <table>
                        <tr>
                            <td>Total MRP</td>
                            <td>₹{getTotalAmount(cart)}</td> {/* Reducer function*/}
                        </tr>
                        <tr>
                            <td>Platform free</td>
                            <td>₹0</td>
                        </tr>
                        <tr>
                            <td>Shipping free</td>
                            <td>₹0</td>
                        </tr>
                        <tr className='total_amount'>
                            <td>Total Amount</td>
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