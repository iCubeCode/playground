// Exception Handling

// console.log('Start')

// try { // it contains the code

//     count = 20

//     let count;

//     console.log(count)
// }
// catch (err) { // it will going to catch the error
//     console.log(err)
// }
// finally { // regardless of error it will going to run
//     console.log('Finally Block')
// }

// console.log('End')




// custom error
// keyword: throw


function AddNumbers(a, b) {


    try {
        // creating a rule
        if (typeof a === 'number' && typeof b === 'number') {

            console.log(`Sum of a and b is ${a + b}`)

        }
        else {
            // throwing error
            throw Error("Only Numbers are accepted")

        }
    }
    catch (error) {
        console.log(error)
    }


}

AddNumbers('2', 5)