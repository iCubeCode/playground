import React from 'react'
import "./Filters.css"

function Filters({
    search,
    price,
    setSearch,
    setPrice
}) {

    const handleClear = () => {
        setSearch('')
        setPrice('')
    }

    return (
        <div className='filters'>
            <div className='filters_header'>
                <span>Filters</span>
                <i onClick={handleClear}></i>
            </div>
            <div className='filters_search'>
                <span>Product Name / Brand</span>
                <input
                    type='text'
                    placeholder='Search by name'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className='filters_price'>
                <span>Price</span>
                <div className='high_low_filter'>
                    <input
                        type='radio'
                        id='highlow'
                        name='price'
                        value={'highlow'}
                        checked={price === 'highlow'}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <label htmlFor='highlow'>High to Low</label>
                </div>
                <div className='high_low_filter'>
                    <input
                        type='radio'
                        id='lowhigh'
                        name='price'
                        value={'lowhigh'}
                        checked={price === 'lowhigh'}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <label htmlFor='lowhigh'>Low to High</label>
                </div>
            </div>
        </div>
    )
}

export default Filters
