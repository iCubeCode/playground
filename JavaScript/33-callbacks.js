// Callbacks

// What is Callback?

// Callback function is a function which is passed into
// another function's argument to invoked inside the function
// after completing the some kind of actions.


// Callbacks are used to handle the results of
//  asynchronous operations which will take so much
//  time to execute.

// Example:1


console.log('Start')

function getUsersData(callback) {
    let users = [
        {
            username: "sonic",
            age: 12
        },
        {
            username: "parker",
            age: 20
        }
    ]
    setTimeout(() => {
        callback(users)
    }, 5000)
}

function printResult(result) {
    console.log('Result')
    console.log(result)
}

getUsersData(printResult)
console.log('End')