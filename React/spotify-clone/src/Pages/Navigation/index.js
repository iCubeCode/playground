import React from 'react'
import SubNavigation from '../../Components/SubNavigation'
import Playlist from '../../Components/Playlist'

function Navigation() {
    return (
        <div className='w-[20%] h-screen px-4 py-5'>
            <SubNavigation />
            <Playlist />
        </div>
    )
}

export default Navigation