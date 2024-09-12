import React from 'react'
import Navigation from '../Pages/Navigation'
import Header from '../Pages/Header'
import Footer from '../Pages/Footer'

import { Outlet } from 'react-router-dom'

function HeaderLayout({
    setSearchText,
    searchText
}) {
    return (
        <div className='flex bg-[#090909]'>
            <Navigation />
            <div className='w-[80%] h-screen overflow-auto'>
                <Header setSearchText={setSearchText} searchText={searchText} />
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}

export default HeaderLayout