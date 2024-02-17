

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



getUserData(3)
    .then((data) => {
        console.log(data)
        getDepartmentName(data[0].department)
            .then((data1) => {
                console.log(data1)
            })
            .catch((error) => {
                console.log(error)
            })
    })
    .catch((error) => {
        console.log(error)
    })