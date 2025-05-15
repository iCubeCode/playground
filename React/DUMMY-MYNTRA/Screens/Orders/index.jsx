import React from 'react'
import "./Orders.css"
import HProductCard from '../../Components/HProductCard'
import { useSelector } from 'react-redux'
import { getOrdersData } from '../../Redux/Slices/productSlice'
import EmptyData from '../../Components/EmptyData'

function Orders() {

    const orders = useSelector(getOrdersData)

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
    )
}

export default Orders
