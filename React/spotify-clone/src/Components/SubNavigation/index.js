import React from 'react'

import SpotifyIcon from '../../assets/Icons/spotify.png'
import HomeIcon from '../../assets/Icons/home.png'
import SearchIcon from '../../assets/Icons/search.png'
import { Link } from 'react-router-dom'

function SubNavigation() {
    return (
        <div className='w-full bg-[#121212] rounded-lg p-5'>
            <div className='mb-5'>
                <img src={SpotifyIcon} className='w-24' alt='spotify icon' />
            </div>
            <div className='flex items-center gap-3'>
                <img src={HomeIcon} alt='Home Icon' className='w-6 h-6' />
                <Link to={'/'} className='text-[#fefefe] font-bold text-xl'>Home</Link>
            </div>
            <div className='flex items-center gap-3 mt-5'>
                <img src={SearchIcon} alt='Home Icon' className='w-6 h-6' />
                <Link to={'/search'} className='text-[#fefefe] font-bold text-xl'>Search</Link>
            </div>
        </div>
    )
}

export default SubNavigation