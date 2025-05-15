import React from 'react'
import "./Wishlist.css"
import HProductCard from '../../Components/HProductCard'
import { useSelector } from 'react-redux'
import EmptyData from '../../Components/EmptyData'

function Wishlist() {

    const products = useSelector(state => state.product.products)

    if (products.filter(item => item.wishList).length === 0) {
        return <EmptyData />
    }

    return (
        <div className='wishlist_container'>
            <div className='wishlist_header'>
                <span>Wishlist</span>
            </div>
            <div className='wishlist_content'>
                <span>Total Items : 1</span>
                {
                    products.filter(item => item.wishList).map((item, index) => {
                        return <HProductCard
                            type={'wishlist'}
                            data={item}
                            key={index}
                        />
                    })
                }

            </div>
        </div>
    )
}

export default Wishlist
