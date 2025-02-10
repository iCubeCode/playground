import React, { useEffect, useState } from 'react'
import "./Wishlist.css"
import { getCartData, getProductsData, setCart, setProducts } from '../../Redux/Slices/ProductsSlice'
import { useDispatch, useSelector } from 'react-redux'
import EmptyCart from '../../Components/EmptyCart'
import HProductCard from '../../Components/HProductCard'

function Wishlist() {

    const dispatch = useDispatch()
    const products = useSelector(getProductsData)
    const cart = useSelector(getCartData)
    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        setWishlist(products.filter((item) => item.wishList))
    }, [products])

    const handleRemoveWishList = (id) => {
        dispatch(setProducts(products.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    "wishList": false
                }
            } else {
                return item
            }
        })))
    }

    const handleAddCart = (data) => {
        if (cart.filter((item) => item.id === data.id).length !== 0) {
            dispatch(setCart(cart.map((item) => {
                if (item.id === data.id) {
                    return {
                        ...item,
                        "qty": item.qty + 1
                    }
                }
                else {
                    return item
                }
            })))
        }
        else {
            dispatch(setCart([...cart, data]))
        }
        dispatch(setProducts(products.map((item) => {
            return item.id === data.id ? { ...item, "wishList": false } : item
        })))
    }

    if (wishlist.length === 0) {
        return <EmptyCart />
    }

    return (
        <div className='wishlist_container'>
            <div className='wishlist_header'>
                <span>Wishlist</span>
            </div>
            <div className='wishlist_content'>
                <span>Total Items : {wishlist.length}</span>
                {
                    wishlist.map((item, index) => {
                        return (
                            <HProductCard
                                key={index}
                                image={item.imgURIs[0]}
                                brand={item.brand}
                                name={item.name}
                                price={item.price}
                                actualPrice={item.MRP}
                                discount={item.discount}
                                type='wishlist'
                                qty={item?.qty}
                                data={item}
                                closeHandler={handleRemoveWishList}
                                handleAddCart={handleAddCart}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Wishlist
