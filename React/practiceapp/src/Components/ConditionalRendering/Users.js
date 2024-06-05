import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import ClipLoader from "react-spinners/ClipLoader";
import { BounceLoader } from 'react-spinners'

function Users() {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {

        axios.get('https://icubecode-server.onrender.com/users')
            .then((result) => {
                setData(result.data)
                setTimeout(() => {
                    setIsLoading(false)
                }, 3000)

            })

    }, [])


    if (isLoading) {
        return <BounceLoader
            color='#34bea4'
            // loading={is}
            // cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    }

    return (
        <div>
            <h1>Users</h1>
            {
                data.map((item, index) => {

                    return (
                        <p key={index}>Username: {item.username}</p>
                    )

                })
            }
        </div>
    )
    // return isLoading ? <h1>Loading</h1> : (
    //     <div>
    //         <h1>Users</h1>
    //         {
    //             data.map((item, index) => {

    //                 return (
    //                     <p key={index}>Username: {item.username}</p>
    //                 )

    //             })
    //         }
    //     </div>
    // )
}

export default Users