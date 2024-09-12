import React, { useEffect, useState } from 'react'

import SearchIcon from '../../assets/Icons/search-gray.png'

import { useLocation } from 'react-router-dom'

function Header({
    setSearchText,
    searchText
}) {

    const location = useLocation()

    const [isSearch, setIsSearch] = useState(false)

    useEffect(() => {

        if (location.pathname.includes('/search')) {
            setIsSearch(true)
        }
        else {
            setIsSearch(false)
        }

    }, [location])

    return (
        <div className='flex justify-end w-full py-4 px-10 bg-[#121212] sticky top-0'>
            {
                isSearch && (
                    <div className='absolute top-2 left-10'>

                        <input
                            type='text'
                            placeholder='What do you want to play?'
                            className='w-[400px] h-[50px] rounded-[50px] pl-12 bg-[#242424] border-[1px] border-[#fefefe] text-[#fefefe]'
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <img src={SearchIcon} alt='' className='w-5 h-5 absolute top-4 left-3' />
                    </div>
                )
            }

            <div className='flex gap-10'>
                <button className='text-[#fefefe] w-32 h-10 rounded-[50px] font-semibold text-lg'>Sign Up</button>
                <button className='bg-[#fefefe] text-[#000] w-32 h-10 rounded-[50px] font-semibold text-lg'>Login</button>
            </div>
        </div>
    )
}

export default Header