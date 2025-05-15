import React, { memo } from 'react'
import "./ProductCard.css"
import { useDispatch, useSelector } from 'react-redux'
import { getCartData, getProducts, setCart, setProducts } from '../../Redux/Slices/productSlice'

const ProductCard = memo(({ data }) => {

    const dispatch = useDispatch()

    const cartData = useSelector(getCartData)
    const products = useSelector(getProducts)

    const handleAddToCart = () => {

        let values = cartData.filter(item => item.id === data.id)

        if (values.length !== 0) {
            // increase qty

            let output = cartData.map((item) => {

                return item.id === data.id ? { ...item, "qty": item.qty + 1 } : item

            })

            dispatch(setCart(output))

        }
        else {
            dispatch(setCart([...cartData, data]))
        }



    }
    console.log('Hi')
    const handleWishlist = () => {
        dispatch(setProducts(products.map((item) => item.id === data.id ? { ...item, "wishList": !data.wishList } : item)))
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
