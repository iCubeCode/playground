import React, { act, useReducer, useState } from 'react'

// function Reducer() {

//     const [firstname, setFirstName] = useState("")
//     const [lastname, setLastName] = useState("")
//     const [email, setEmail] = useState("")
//     const [phoneNumber, setPhoneNumber] = useState("")

//     function handleFirstName(e) {
//         setFirstName(e.target.value)
//     }

//     function handleLastName(e) {
//         setLastName(e.target.value)
//     }

//     function handleEmailName(e) {
//         setEmail(e.target.value)
//     }

//     function handlePhoneNumber(e) {
//         setPhoneNumber(e.target.value)
//     }

//     return (
//         <div>
//             <input
//                 type='text'
//                 value={firstname}
//                 onChange={handleFirstName}
//             />
//             <br />
//             <br />
//             <input
//                 type='text'
//                 value={lastname}
//                 onChange={handleLastName}
//             />
//             <br />
//             <br />
//             <input
//                 type='text'
//                 value={email}
//                 onChange={handleEmailName}
//             />
//             <br />
//             <br />
//             <input
//                 type='number'
//                 value={phoneNumber}
//                 onChange={handlePhoneNumber}
//             />
//         </div>
//     )
// }

function Reducer() {

    const [state, disptach] = useReducer(reducer, {
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: ""
    })

    return (
        <div>
            <input
                type='text'
                value={state.firstname}
                onChange={(e) => {
                    disptach({ type: TYPES.firstName, payload: e.target.value })
                }}
            />
            <br />
            <br />
            <input
                type='text'
                value={state.lastname}
                onChange={(e) => {
                    disptach({ type: TYPES.lastName, payload: e.target.value })
                }}
            />
            <br />
            <br />
            <input
                type='text'
                value={state.email}
                onChange={(e) => {
                    disptach({ type: TYPES.email, payload: e.target.value })
                }}
            />
            <br />
            <br />
            <input
                type='number'
                value={state.phoneNumber}
                onChange={(e) => {
                    disptach({ type: TYPES.phoneNumber, payload: e.target.value })
                }}
            />
        </div>
    )
}

export default Reducer;



function reducer(state, action) {

    if (action.type === TYPES.firstName) {
        return {
            firstname: action.payload
        }
    }
    else if (action.type === TYPES.lastName) {
        return {
            lastname: action.payload
        }
    }
    else if (action.type === TYPES.email) {
        return {
            email: action.payload
        }
    }
    else if (action.type === TYPES.phoneNumber) {
        return {
            phoneNumber: action.payload
        }
    }
    else {
        return
    }

}



const TYPES = {
    firstName: "FirstName",
    lastName: "LastName",
    email: "Email",
    phoneNumber: "PhoneNumber"
}