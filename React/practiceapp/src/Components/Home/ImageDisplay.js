import React from 'react'

function ImageDisplay({ carname }) {
    return (
        <div>
            <h1>Car Name: {carname}</h1>
            <div style={{ display: "flex", alignItems: "center" }}>
                <img alt='card' src={"https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80"} />
                <p>Let's cruise into the day like…
                    If life is a journey, I am all about enjoying the ride.
                    Sun-kissed through the sunroof ..
                    The only kind of control I like is that of being behind the wheel.
                    The cooler the car, the better the vibe.
                    Check out my happy place on wheels.</p>
            </div>
        </div>
    )
}

export default ImageDisplay