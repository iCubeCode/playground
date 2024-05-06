import React from 'react'
// import ImageDisplay from './ImageDisplay';

function Home() {

    // let carNames = ["Tesla", "Toyota", "Ford", "BMW"]

    function GetAlert(name) {
        alert("Hello" + " " + name)
    }

    return (
        <div>
            {/* {
                carNames.map((item) => {
                    return <ImageDisplay
                        carname={item}
                    />
                })
            } */}
            <UsersList name='stark' isNum={1} GetAlert={GetAlert} />
            <UsersList isNum={2} GetAlert={GetAlert} />
            <UsersList name='steve' isNum={3} GetAlert={GetAlert} />
        </div>
    )
}

export default Home;



function UsersList(props) {

    // const { name = 'user', isNum, GetAlert } = props

    return (
        <div>
            <h2>Username: {props.name}, isNum is {props.isNum}</h2>
            <button onClick={() => props.GetAlert(props.name)}>Click</button>
        </div>
    )
}

export {
    UsersList
}