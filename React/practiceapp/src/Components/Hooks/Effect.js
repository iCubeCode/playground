import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Effect() {

    const [data, setData] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {

        axios.get('https://icubecode-server.onrender.com/users')
            .then((result) => {
                console.log(result)
                setData(result.data)
            })
            .catch((err) => {
                console.error(err)
            })

    }, [])

    useEffect(() => {

        console.log('Hi', count)

    }, [count])

    return (
        <div>
            <h1>Effect</h1>

            <p>{count}</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>Click</button>

            {
                data.map((item, index) => {

                    return (
                        <p key={index}>Username: {item.username}</p>
                    )

                })
            }
        </div>
    )
}

export default Effect;