import React, { useState, useMemo, useReducer } from 'react'
import "./Products.css"
import Filters from '../../Pages/Filters'
import ProductCard from '../../Components/ProductCard'
import { useSelector } from 'react-redux'


const FILTER_ENUM = {
    "SEARCH": "search",
    "PRICE": "price"
}

const initialState = {
    [FILTER_ENUM.SEARCH]: "",
    [FILTER_ENUM.PRICE]: ""
}

function reducer(state, action) {

    switch (action.type) {
        case FILTER_ENUM.SEARCH:
            return { ...state, [FILTER_ENUM.SEARCH]: action.payload }
        case FILTER_ENUM.PRICE:
            return { ...state, [FILTER_ENUM.PRICE]: action.payload }
        default:
            return state
    }

}

function Products() {

    const [state, dispatcher] = useReducer(reducer, initialState)

    const products = useSelector((state) => state.product.products)

    const filteredProducts = useMemo(() => {

        if (state.search !== '' || state.price !== '') {


            let output = products.filter((item) => {

                let name = false
                let brand = false


                name = item.name.toLowerCase().includes(state.search.toLowerCase())
                brand = item.brand.toLowerCase().includes(state.search.toLowerCase())

                return name || brand

            })

            if (state.price === 'highlow') {
                output = output.sort((a, b) => b.price - a.price)
            }
            else {
                output = output.sort((a, b) => a.price - b.price)
            }

            return output


        }
        else {
            return products
        }


    }, [state, products])

    const [text, setText] = useState('')

    return (
        <div className='products'>
            <div className='breadcrumb'>
                <p>Home / Clothing / <b>Products</b></p>
                <input type='text' placeholder='write' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='products_container'>
                <Filters
                    search={state.search}
                    setSearch={(value) => dispatcher({ type: FILTER_ENUM.SEARCH, payload: value })}
                    price={state.price}
                    setPrice={(value) => dispatcher({ type: FILTER_ENUM.PRICE, payload: value })}
                />
                <div className='products_content'>
                    {
                        filteredProducts.map((item, index) => {
                            return <ProductCard
                                data={item}
                                key={index}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Products
