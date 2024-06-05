import React from 'react'

import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()

    function handleNavigate() {
        navigate('/users/stark')
    }


    function handleParams() {

        let myId = 'stark'

        let secretId = btoa(myId)

        navigate(`/profile?${secretId}`)
    }

    return (
        <div>
            Home
            <br></br>
            <button onClick={handleNavigate}>Go to Users</button>
            <br></br>
            <button onClick={handleParams}>Click</button>
        </div>
    )
}

export default Home