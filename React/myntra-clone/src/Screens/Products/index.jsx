import React, { useMemo, useReducer } from 'react'
import "./Products.css"
import Filters from '../../Pages/Filters'
import ProductCard from '../../Components/ProductCard'
import { useSelector } from 'react-redux'
import { getProducts } from '../../Redux/Slices/productSlice'


const Filter_Enum = {
    "SEARCH": "search",
    "PRICE": "price"
}

const initialState = {
    [Filter_Enum.SEARCH]: '',
    [Filter_Enum.PRICE]: ''
}

function reducer(state, action) {

    switch (action.type) {
        case Filter_Enum.SEARCH:
            return { ...state, [Filter_Enum.SEARCH]: action.payload }
        case Filter_Enum.PRICE:
            return { ...state, [Filter_Enum.PRICE]: action.payload }
        default:
            return state
    }

}


function Products() {

    const [state, dispatcher] = useReducer(reducer, initialState)

    const products = useSelector(getProducts)

    const filteredProcducts = useMemo(() => {

        if (state.search !== '' || state.price !== '') {
            // filters

            let output = [...products].filter((item) => {

                let name = false
                let brand = false

                name = item.name.toLowerCase().includes(state.search.toLowerCase())
                brand = item.brand.toLowerCase().includes(state.search.toLowerCase())

                return name || brand
            })

            if (state.price === 'highlow') {
                return output.sort((a, b) => b.price - a.price)
            }
            else {
                return output.sort((a, b) => a.price - b.price)
            }
        }
        else {
            return products
        }

    }, [state, products])

    return (
        <div className='products'>
            <div className='breadcrumb'>
                <p>Home / Clothing / <b>Products</b></p>
            </div>
            <div className='products_container'>
                <Filters
                    search={state.search}
                    price={state.price}
                    setSearch={(value) => dispatcher({ type: Filter_Enum.SEARCH, payload: value })}
                    setPrice={(value) => dispatcher({ type: Filter_Enum.PRICE, payload: value })}
                />
                <div className='products_content'>
                    {
                        filteredProcducts.map((item, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    data={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Products
