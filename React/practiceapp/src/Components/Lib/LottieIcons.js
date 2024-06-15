import React from 'react'
import Lottie from "lottie-react";
import PhoneIcon from './phone-icon.json'
import './Lottie.css'

function LottieIcons() {
    return (
        <div className='container'>
            <Lottie animationData={PhoneIcon} loop={true} />
        </div>
    )
}

export default LottieIcons