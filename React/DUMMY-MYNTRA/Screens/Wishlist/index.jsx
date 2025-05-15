import React from 'react'
import "./Wishlist.css"
import HProductCard from '../../Components/HProductCard'
import { useSelector } from 'react-redux'
import { getProducts } from '../../Redux/Slices/productSlice'
import EmptyData from '../../Components/EmptyData'

function Wishlist() {

    const products = useSelector(getProducts)

    if (products.filter((item) => item.wishList).length === 0) {
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
                    products.filter((item) => item.wishList).map((item, index) => {
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
                                type={'wishlist'}
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

export default Wishlist
