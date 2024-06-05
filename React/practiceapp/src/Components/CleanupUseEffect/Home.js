import axios from 'axios'
import React, { useEffect } from 'react'

function Home() {

    useEffect(() => {

        const controller = new AbortController()
        let signal = controller.signal

        axios.get('https://icubecode-server.onrender.com/users', {
            signal
        })
            .then((result) => {
                console.log(result)
            })
            .catch((err) => {
                console.error(err)
            })


        return () => {
            controller.abort()
        }
    }, [])

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home