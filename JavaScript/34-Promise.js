// Promise


// Promise contructor take only one argument which is callback function

// and the callback functions acceptes two parameters which is
// resolve or reject



// let numberCheck = new Promise((resolve, reject) => {

//     let x = 1

//     let y = 1

//     if (x === y) {
//         resolve()
//     }
//     else {
//         reject()
//     }

// })


// numberCheck.then(() => {
//     console.log('Yes the promise is succes')
// })
//     .catch(() => {
//         console.log('No! the promise is failed')
//     })


// Example:2


function getUsers(id) {

    let usersList = [
        {
            id: 0,
            username: "steve"
        },
        {
            id: 1,
            username: "bruce"
        },
        {
            id: 2,
            username: "thor"
        }
    ]

    return new Promise((resolve, reject) => {


        let result = usersList.filter((value) => value.id === id)

        if (result.length === 0) {
            reject("No User Found")
        }
        else {
            resolve(result)
        }


    })

}

getUsers(12)
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })