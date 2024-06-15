import React from 'react'
import { Tilt } from 'react-tilt'

function ReactTilt() {

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    };

    const inputStyle = {
        marginBottom: '10px',
        padding: '8px',
        fontSize: '16px',
        borderRadius: '3px',
        border: '1px solid #ccc',
    };

    const buttonStyle = {
        padding: '10px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
    };

    return (
        <Tilt options={defaultOptions}>
            <div style={formStyle}>
                <label>
                    Username:
                    <input
                        type="text"
                        style={inputStyle}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        style={inputStyle}
                    />
                </label>
                <button type="submit" style={buttonStyle}>
                    Login
                </button>
            </div>
        </Tilt>
    )
}

export default ReactTilt;



const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 30,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}