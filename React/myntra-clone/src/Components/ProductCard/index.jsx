import React, { memo } from 'react'
import "./ProductCard.css"
import { useDispatch, useSelector } from 'react-redux'
import { getCartData, getProductsData, setCart, setProducts } from '../../Redux/Slices/ProductsSlice'


const ProductCard = memo(({ image, brand, name, price, actualPrice, discount, rating, reviews, wishList, data }) => {

    const dispatch = useDispatch()
    const cart = useSelector(getCartData)
    const products = useSelector(getProductsData)

    const handleAddToCart = () => {

        let values = cart.filter(item => item.id === data.id)
        // check the product is already exists
        if (values.length !== 0) {
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

    }

    const handleWishList = () => {
        dispatch(setProducts(products.map((item) => {
            if (item.id === data.id) {
                return {
                    ...item,
                    "wishList": !item.wishList
                }
            }
            else {
                return item
            }
        })))
    }

    return (
        <div className='product_card'>
            <div className='product_card_img'>
                <img src={image} alt={image} />
                <div className='product_card_ratings'>
                    <p><span>{rating}</span> <i></i> <span>| {reviews}</span></p>
                </div>
                {/* product_fill_heart ; product_empty_heart */}
                <div className={wishList ? 'product_fill_heart' : 'product_empty_heart'} onClick={handleWishList}></div>
            </div>
            <div className='product_card_details'>
                <span className='product_card_brand'>{brand}</span>
                <span className='product_name'>{name}</span>
                <p className='product_prices'>Rs. {price} <del>Rs. {actualPrice}</del> <span>{`(${discount}% OFF)`}</span></p>
            </div>
            <div className='product_card_btn'>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    )
})

export default ProductCard
