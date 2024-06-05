import React, { useState } from 'react'

function Conditional() {

    const [userLogin, setUserLogin] = useState(false)

    function handleLogin() {
        setUserLogin(true)
    }

    if (userLogin) {
        return (
            <div>User is loggedIn</div>
        )
    }
    else {
        return (
            <div>
                <h2>Please Login</h2>
                <button onClick={handleLogin}>Login</button>
            </div>
        )
    }

}

export default Conditional