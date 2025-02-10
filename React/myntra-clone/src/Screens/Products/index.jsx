import React, { useMemo, useReducer } from 'react'
import "./Products.css"
import BreadCrumb from '../../Components/BreadCrumb';
import Filters from '../../Pages/Filters';
import ProductCard from '../../Components/ProductCard';
import { useSelector } from 'react-redux';
import { getProductsData } from '../../Redux/Slices/ProductsSlice';


const PRODUCTENUM = {
    "PRICE": "price",
    "SEARCH": "search"
}

const initialStates = {
    [PRODUCTENUM.PRICE]: '',
    [PRODUCTENUM.SEARCH]: ''
}


function Products() {

    const [state, dispatcher] = useReducer(reducer, initialStates)

    const products = useSelector(getProductsData)

    const filteredData = useMemo(() => {

        if (state.search === '' && state.price === '') {
            return products
        }
        else {

            let output = [...products].filter((item) => {
                let name = false;
                let brand = false;

                name = item.name.toLowerCase().includes(state.search.toLowerCase())
                brand = item.brand.toLowerCase().includes(state.search.toLowerCase())

                return name || brand
            })

            if (state.price !== '') {
                if (state.price === 'highlow') {
                    output.sort((a, b) => b.price - a.price)
                }
                else {
                    output.sort((a, b) => a.price - b.price)
                }
            }

            return output
        }

    }, [state, products])

    return (
        <div className='products'>
            <BreadCrumb />
            <div className='products_container'>
                <Filters
                    search={state.search}
                    setSearch={(value) => dispatcher({ 'type': PRODUCTENUM.SEARCH, "value": value })}
                    price={state.price}
                    setPrice={(value) => dispatcher({ 'type': PRODUCTENUM.PRICE, "value": value })}
                />
                <div className='products_content'>
                    {
                        filteredData.map((item, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    image={item.imgURIs[0]}
                                    brand={item.brand}
                                    name={item.name}
                                    price={item.price}
                                    actualPrice={item.MRP}
                                    discount={item.discount}
                                    rating={item.rating}
                                    reviews={item.reviews}
                                    wishList={item.wishList}
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

export default Products;



function reducer(state, action) {

    switch (action.type) {
        case PRODUCTENUM.PRICE:
            return { ...state, [PRODUCTENUM.PRICE]: action.value }
        case PRODUCTENUM.SEARCH:
            return { ...state, [PRODUCTENUM.SEARCH]: action.value }
        default:
            state
    }

}
