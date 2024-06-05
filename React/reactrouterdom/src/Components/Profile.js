import React from 'react'
import { useLocation } from 'react-router-dom'

function Profile() {

    const location = useLocation()

    console.log(atob(location.search.split('?')[1]))

    return (
        <div>Profile</div>
    )
}

export default Profile