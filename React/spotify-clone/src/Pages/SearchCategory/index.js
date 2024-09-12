import React from 'react'
import SearchCategoryDispaly from '../../Components/SearchCategoryDisplay'

import { SearchData } from '../../assets/Data/data'

function SearchCategory() {
    return (
        <div className='py-10 px-4 bg-[#121212]'>
            <div className='mt-10 mb-5'>
                <span className='text-2xl text-[#fefefe] font-bold'>Browse all</span>
            </div>
            <div className='grid grid-cols-4 gap-8'>
                {
                    SearchData.map((item, index) => {
                        return (
                            <SearchCategoryDispaly
                                key={index}
                                imgURI={item.uri}
                                title={item.title}
                                bgColor={item.color}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SearchCategory