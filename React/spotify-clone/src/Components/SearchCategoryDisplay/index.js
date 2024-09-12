import React from 'react'

function SearchCategoryDispaly({ imgURI, title, bgColor }) {
    return (
        <div className='w-64 h-36 rounded-lg relative overflow-hidden'
            style={{ background: bgColor }}
        >
            <span className='text-3xl text-[#fefefe] font-bold absolute top-2 left-2'>{title}</span>
            <img src={imgURI} alt=''
                className='w-24 h-24 absolute -bottom-2 -right-4 rotate-[30deg]'
            />
        </div>
    )
}

export default SearchCategoryDispaly