// Call stack

// var count = 10

// function SayHello() {
//     console.log(count)
//     var count = 40
// }

// SayHello()
// console.log(count)



// Event Loop


// setTimeout(() => {

//     console.log('Inside')

// }, 2000)


// console.log('Outside')



var username = 'steve'

setTimeout(() => {

    console.log(username)

}, 2000)

setTimeout(() => {

    username = 'bruce'

}, 1000)


console.log(username)


// EXAMPLES


// Example: 1

// console.log(x)

// var x = 5

// Example: 2

// console.log(x)

// let x = 5


// Example: 3

// var x = 5

// {
//     var x = 10
// }

// console.log(x)


// Example: 4

// let name = 'steve'

// {
//     let name = 'bruce'
// }

// console.log(name)


// Example: 5

// var count = 10

// function SayHello() {
//     console.log(count)
//     var count = 40
// }

// SayHello()
// console.log(count)


// Example: 6

// let count = 20

// function SayHello() {

//     let count = 30

// }

// SayHello()
// console.log(count)


// Example: 7


// SayHello()
// console.log(number)
// var number = 2

// function SayHello() {

//     console.log(number)

// }

// console.log(number)



// Example: 8


// var name = 'steve'

// SayHello()
// let SayHello = () => {

//     console.log(name)

// }

// console.log(name)


// Example: 9


// let x = 2

// setTimeout(() => {

//     x = x + 2

// }, 2000)

// console.log(x)


// Example: 10

// let number = 2

// setTimeout(() => {
//     console.log(number + 10)
// })

// console.log(number)