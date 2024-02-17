// Array Iterations

// Find
// it will going to return the element of array based on the filter critria

// let numbers = [1, 2, 3, 4, 5, 4, 6]


// let isExists = numbers.find((value) => {

//     return value === 4

// })

// console.log('FIND')
// console.log(isExists)

// // Filter
// it will going to return the array based on the filter critria

// let filterdNumbers = numbers.filter((value) => {

//     return value === 4

// })

// console.log('FILTER')
// console.log(filterdNumbers)



let users = [
    {
        name: "steve",
        email: "steve@gmail.com",
        age: 20
    },
    {
        name: "bruce",
        email: "bruce@gmail.com",
        age: 30
    },
    {
        name: "zoro",
        email: "zoro@gmail.com",
        age: 22
    }
]


// users.forEach((value) => {

//     console.log(value.name + ": " + value.email)

// })


// let filteredUsers = users.filter((value) => {
//     return value.age < 25
// })

// console.log(filteredUsers)


let isExists = users.find((value) => {
    return value.name === 'steve'
})

console.log(isExists)