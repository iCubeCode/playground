import React from 'react'
import "./Orders.css"
import HProductCard from '../../Components/HProductCard'
import { useSelector } from 'react-redux'
import EmptyData from '../../Components/EmptyData'

function Orders() {

    const orders = useSelector(state => state.product.orders)

    if (orders.length === 0) {
        return <EmptyData />
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
                        return <HProductCard
                            data={item}
                            key={index}
                            type={'orders'}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Orders
