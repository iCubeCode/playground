import React from 'react'
import "./Orders.css"
import { getOrdersData } from '../../Redux/Slices/ProductsSlice'
import { useSelector } from 'react-redux'
import EmptyCart from '../../Components/EmptyCart'
import HProductCard from '../../Components/HProductCard'

function Orders() {

    const orders = useSelector(getOrdersData)

    if (orders.length === 0) {
        return <EmptyCart />
    }

    return (
        <div className='orders_container'>
            <div className='orders_header'>
                <span>Orders</span>
            </div>
            <div className='orders_content'>
                <span>Total Items : {orders.length}</span>
                {
                    orders.map((item, index) => {
                        return (
                            <HProductCard
                                key={index}
                                image={item?.imgURIs[0]}
                                brand={item?.brand}
                                name={item?.name}
                                price={item?.price}
                                actualPrice={item?.MRP}
                                discount={item?.discount}
                                type='orders'
                                qty={item?.qty}
                                data={item}
                                closeHandler={() => { }}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Orders
