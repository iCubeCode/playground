async function main() {

    let name = await askQuestion('Enter your name: ')
    console.log(`The name is ${name}`)
    rl.close()

}

main()