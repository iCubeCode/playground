// Array Methods


// Use Case: 1

// Sort a number of array in Ascending order

// let numbers = [2, 4, 6, 8, 1, 3, 9, 7]


// let result = numbers.sort()

// console.log(result)





// Use Case: 2

// Sort a number of array in
// Descending order



// let numbers = [2, 4, 6, 8, 1, 3, 9, 7]

// let result = numbers.sort((a, b) => b - a)

// console.log(result)



// Use Case: 3

// Sort an array of object
// in Ascending order with respect to
//  username



// let users = [
//     {
//         id: 0,
//         username: "steve",
//         phoneNumber: 8784794
//     },
//     {
//         id: 1,
//         username: "tony",
//         phoneNumber: 8469409
//     },
//     {
//         id: 2,
//         username: "bruce",
//         phoneNumber: 5384939
//     }
// ]



// let result = users.sort((a, b) => a.username > b.username ? 1 : -1)

// console.log(result)









// Use Case: 4

// Sort an Array of object in Descending
// order based on username



// let users = [
//     {
//         id: 0,
//         username: "steve",
//         phoneNumber: 8784794
//     },
//     {
//         id: 1,
//         username: "tony",
//         phoneNumber: 8469409
//     },
//     {
//         id: 2,
//         username: "bruce",
//         phoneNumber: 5384939
//     }
// ]


// let result = users.sort((a, b) => a.username > b.username ? -1 : 1)

// console.log(result)












// Use Case: 5


// Update a array using filter criteria


// let usersNames = ['bruce', 'steve']

// let result = usersNames.map((value) => {

//     // if (value === 'steve') {
//     //     return "Tony"
//     // }
//     // else {
//     //     return value
//     // }


//     return value === 'steve' ? 'Tony' : value

// })

// console.log(result)














// Use Case: 6

// Update a array of object using filter criteria


// let users = [
//     {
//         id: 0,
//         username: "steve",
//         phoneNumber: 8784794
//     },
//     {
//         id: 1,
//         username: "tony",
//         phoneNumber: 8469409
//     },
//     {
//         id: 2,
//         username: "bruce",
//         phoneNumber: 5384939
//     }
// ]



// let result = users.map((value) => {

//     if (value.username === 'tony') {
//         return { ...value, "phoneNumber": 0 }
//     }
//     else {
//         return value
//     }

// })

// console.log(result)









// Use Case: 7


// How to remove an array element using
// filter criteria


// let users = ['bruce', 'steve', 'tony']


// let result = users.filter((value) => value !== 'bruce')

// console.log(result)











// Use Case: 8


// How to remove duplicate from an array


// let numbers = [4, 3, 6, 72, 4, 5, 3, 2, 5, 6, 9]


// let result = numbers.filter((value, index) => {

//     // console.log(`Value: ${value}, Index: ${index}, IndexOf: ${numbers.indexOf(value)}`)

//     return numbers.indexOf(value) === index

// })

// console.log(result)









// Use Case: 9


// Get the sum of amount from an array of object.



let new_users = [
    {
        id: 0,
        username: "John",
        amount: 100
    },
    {
        id: 1,
        username: "Riya",
        amount: 70
    },
    {
        id: 2,
        username: "Raze",
        amount: 120
    }
]



// 1st Way - For loop


// let sum = 0


// for (let count = 0; count < new_users.length; count++) {

//     sum += new_users[count].amount

// }

// console.log(sum)




// 2nd way - using forEach


// let sum = 0

// new_users.forEach((value) => {

//     sum += value.amount

// })

// console.log(sum)


// 3rd way - reduce



// let sum = new_users.reduce((acc, value) => {
//     return acc += value.amount
// }, 0)

// console.log(sum)