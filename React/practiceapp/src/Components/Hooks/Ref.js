import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

// useRef example

// function Ref() {

//     const textRef = useRef(null)

//     function handleText() {

//         console.log(textRef.current.value)

//         alert("Hi")

//     }

//     console.log(textRef)

//     return (
//         <div>
//             <input type='text' ref={textRef} />
//             <button onClick={handleText}>Click</button>
//         </div>
//     )
// }


// Controllable Component example

// function Ref() {

//     const [text, setText] = useState("")

//     function handleText(event) {
//         console.log(event.target.value)

//         if (!event.target.value.includes('a')) {
//             setText(event.target.value)
//         }
//     }

//     return (
//         <div>
//             <input
//                 type='text'
//                 value={text}
//                 onChange={handleText}
//             />
//         </div>
//     )
// }

// uncontrollable Component example

// function Ref() {

//     const textRef = useRef("")

//     const handleClick = () => {

//         console.log(textRef.current.value)

//     }
//     console.log('Hi')
//     return (
//         <div>
//             <input
//                 type='text'
//                 ref={textRef}
//             />
//             <button onClick={handleClick}>Click</button>
//         </div>
//     )
// }


// How to auto scroll to element

function Ref() {

    const [data, setData] = useState([])

    const scrollRef = useRef(null)

    useEffect(() => {

        axios.get('https://icubecode-server.onrender.com/users')
            .then((response) => {
                setData(response.data)
            })
    }, [])

    function autoScroll() {
        scrollRef.current.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div>
            <button onClick={autoScroll}>Click</button>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <>
                                    {
                                        item.username === 'ruby' ?
                                            <tr key={index} ref={scrollRef}>
                                                <td>{item.username}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phoneNumber}</td>
                                            </tr>
                                            :
                                            <tr key={index}>
                                                <td>{item.username}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phoneNumber}</td>
                                            </tr>
                                    }
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Ref