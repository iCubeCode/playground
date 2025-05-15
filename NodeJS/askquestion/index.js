const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const askQuestion = async (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer)
        })
    })
}


module.exports = { askQuestion, rl }










// rl.question('Enter your name: ', (answer) => {
//     rl.question('Enter your age: ', (answer2) => {

//         console.log(`Name is ${answer}`)
//         console.log(`age is ${answer2}`)
//         rl.close()

//     })
// })