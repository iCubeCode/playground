import React from 'react'
import { toast } from 'react-toastify'

function Toastify() {


    const handleSuccess = () => {
        // toast('This is the notification')
        // toast.success('This is the notification')
        // toast.error('This is the notification')
        // toast.warn('This is the notification')
        // toast.info('This is the notification')


        toast.success('This is the success toast', {
            toastId: "thisismyid",
            position: "top-left",
            // autoClose: true,
            // icon: false
            theme: "dark",
            delay: 2000
        })

    }


    return (
        <div>
            <button onClick={handleSuccess}>Click Here</button>
        </div>
    )
}

export default Toastify