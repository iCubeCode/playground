import React from 'react'
import "./Slider.css"
import { MyntraData } from '../../data/index'

function Slider() {
    return (
        <div className='slider_container'>
            <div className='slider_images'>
                {
                    MyntraData.Slider.map((item, index) => {
                        return <img src={item.uri} alt={item.id} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default Slider
