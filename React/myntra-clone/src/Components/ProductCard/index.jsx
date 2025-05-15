import React, { memo } from 'react'
import "./ProductCard.css"
import { useDispatch, useSelector } from 'react-redux'
import { setCart, setProducts } from '../../Redux/Slice/productSlice'

const ProductCard = memo(({ data }) => {

    const dispatch = useDispatch()

    const cart = useSelector(state => state.product.cart)
    const products = useSelector(state => state.product.products)

    const handleAddToCart = () => {

        if (cart.length === 0) {
            dispatch(setCart([data]))
            return
        }

        let isExists = cart.filter((item) => item.id === data.id)

        if (isExists.length === 0) {
            // doesn't exists
            dispatch(setCart([...cart, data]))
        }
        else {
            // it exists
            let values = cart.map((item) => {
                if (item.id === data.id) {
                    return { ...item, "qty": item.qty + 1 }
                }
                else {
                    return item
                }
            })

            dispatch(setCart(values))
        }


    }

    const handleWishlist = () => {

        let values = products.map((item) => {
            return item.id === data.id ? { ...item, "wishList": !item.wishList } : item
        })

        dispatch(setProducts(values))
    }

    return (
        <div className='product_card'>
            <div className='product_card_img'>
                <img src={data.imgURIs[0]} alt={data.imgURIs[0]} />
                <div className='product_card_ratings'>
                    <p><span>{data.rating}</span> <i></i> <span>| {data.reviews}</span></p>
                </div>
                {/* product_fill_heart ; product_empty_heart */}
                <div
                    className={data.wishList ? 'product_fill_heart' : 'product_empty_heart'}
                    onClick={handleWishlist}
                ></div>
            </div>
            <div className='product_card_details'>
                <span className='product_card_brand'>{data.brand}</span>
                <span className='product_name'>{data.name}</span>
                <p className='product_prices'>Rs. {data.price} <del>Rs. {data.MRP}</del> <span>{`(${data.discount}% OFF)`}</span></p>
            </div>
            <div className='product_card_btn'>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    )
})

export default ProductCard
