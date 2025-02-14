import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'

function HeaderLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default HeaderLayout
