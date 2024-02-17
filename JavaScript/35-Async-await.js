

function getUserData(id) {

    let usersList = [
        {
            id: 0,
            name: "steve",
            department: "A"
        },
        {
            id: 1,
            name: "bruce",
            department: "B"
        },
        {
            id: 3,
            name: "thor",
            department: "D"
        },
        {
            id: 4,
            name: 'parker',
            department: "C"
        }
    ]

    return new Promise((resolve, reject) => {

        let result = usersList.filter(item => item.id === id)

        if (result.length === 0) {
            reject("NO User Found")
        }
        else {
            resolve(result)
        }

    })
}

function getDepartmentName(type) {


    let departments = [
        {
            id: 0,
            type: "A",
            name: "SECTION-A"
        },
        {
            id: 1,
            type: "B",
            name: "SECTION-B"
        },
        {
            id: 3,
            type: "C",
            name: "SECTION-C"
        }
    ]

    return new Promise((resolve, reject) => {

        let result = departments.filter(item => item.type === type)

        if (result.length === 0) {
            reject("NO Department Found")
        }
        else {
            resolve(result)
        }

    })

}


// Example: 1 - Asynchronous

// function sayHello() {
//     console.log('Start') // 1

//     getUserData(1).then((data) => {
//         console.log(data) // 3
//     })
//         .catch((error) => {
//             console.log(error)
//         })

//     console.log('END') // 2
// }


// sayHello()



// Example 2: Synchronous

async function PrintResult() {


    console.log('Start')

    let userData = await getUserData(1)

    console.log('Got the data')
    console.log(userData)


    let departmentData = await getDepartmentName(userData[0].department)

    console.log(departmentData)

    console.log('END')

}

PrintResult()




// Example 3: You can't use await outside the function, it will through error

// let userData = await getUserData()