import React from 'react'

function Artist({ imgURL, name, occ = 'Artist' }) {
    return (
        <div>
            {/* image */}
            <div>
                <img src={imgURL} alt='img' className='w-40 h-40 rounded-full' />
            </div>
            {/* details */}
            <div className='px-3 py-4'>
                <p className='text-lg text-[#fefefe] font-bold'>{name}</p>
                <span className='text-[#a0a0a0] text-md'>{occ}</span>
            </div>
        </div>
    )
}

export default Artist