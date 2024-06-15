import React, { useEffect, useState } from 'react'
import "./SkeletonProducts.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import axios from 'axios'

function SkeletonProducts() {

    const [products, setProducts] = useState([])

    useEffect(() => {

        axios.get('https://icubecode-server.onrender.com/products')
            .then((result) => {
                setProducts(result.data)
            })
            .catch(err => console.error(err))

    }, [])

    return (
        <div className='sp_container'>

            {
                products.length === 0 && (
                    <>
                        {
                            [1, 2, 3, 4, 5, 6].map((item) => {
                                return (
                                    <SkeletonProduct />
                                )
                            })
                        }
                    </>
                )
            }

            {
                products.map((item, index) => {
                    return (
                        <div className='sp_product' key={index}>
                            <div className='sp_product_img'>
                                <img src={item.imgurl} alt='img' />
                            </div>
                            <div className='sp_product_details'>
                                <h3>{item.brand}</h3>
                                <p>{item.title}</p>
                                <span>Price: {item.price}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SkeletonProducts;



function SkeletonProduct() {
    return (
        <div className='skeleton_container'>
            <div className='skeleton_container_img'>
                <Skeleton width={100} height={100} />
            </div>
            <div className='skeleton_container_details'>
                <Skeleton count={3} width={300} />
            </div>
        </div>
    )
}