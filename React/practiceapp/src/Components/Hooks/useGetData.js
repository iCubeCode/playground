import React, { useEffect, useState } from 'react'
import axios from 'axios'

function useGetData() {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        axios.get('https://icubecode-server.onrender.com/users')
            .then((response) => {
                setData(response.data)
                setIsLoading(false)
            })
    }, [])


    return [isLoading, data]
}

export default useGetData