import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {

    const params = useParams()

    console.log(params)

    return (
        <div>Users <b>{params.username}</b></div>
    )
}

export default Users