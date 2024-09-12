import React from 'react'

import LibraryIcon from '../../assets/Icons/library.png'
import AddIcon from '../../assets/Icons/add.png'

function Playlist() {
    return (
        <div className='bg-[#121212] w-full p-4 mt-5 rounded-lg'>
            {/* Playlist Header */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={LibraryIcon} alt='library' className='w-6 h-6' />
                    <span className='text-[#fefefe] font-bold text-lg'>Your Library</span>
                </div>
                <div>
                    <img src={AddIcon} alt='add playlist icon' className='w-6 h-6' />
                </div>
            </div>
            <div className='my-10 bg-[#1f1f1f] rounded-lg text-[#fefefe] p-4'>
                <p className='my-2 text-lg font-bold'>Create your first Playlist</p>
                <span className='text-md'>It's easy, we'll help you</span>
                <button className='w-40 h-10 bg-[#fefefe] text-[#000] rounded-[50px] font-bold mt-4'>Create Playlist</button>
            </div>
        </div>
    )
}

export default Playlist