import React, { useState } from 'react'

function State() {

    const [count, setCount] = useState(0)

    const [name, setName] = useState("")

    // let count = 0;
    // function Increase() {
    //     count = count + 1
    //     console.log(count)
    // }


    function Increase() {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>useState</h1>
            <p>Count: {count}</p>
            <button onClick={Increase}>Click</button>
        </div>
    )
}

export default State;