import React, { lazy, Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
// import AboutUs from './AboutUs'
import "./Cleanup.css"

const AboutUs = lazy(() => import('./AboutUs'))


function CleanUp() {
    return (
        <div>
            <div className='nav_bar'>
                <Link to={'/'}>Home</Link>
                <Link to={'/aboutus'}>About Us</Link>
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/aboutus' element={
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <AboutUs />
                    </Suspense>
                } />
            </Routes>
        </div>
    )
}

export default CleanUp