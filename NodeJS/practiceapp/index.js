const { add, sub } = require('./calculator')
const { askQuestion, rl } = require('@icubecode/askquestion')


// console.log(add(2, 3))
// console.log(sub(5, 2))


async function main() {

    let name = await askQuestion('Enter your name: ')
    console.log(`The name is ${name}`)
    rl.close()

}

main()