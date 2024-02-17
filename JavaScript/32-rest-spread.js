// Spread operator

// it will gives you access to the insides of an iterable object.

// the representation of spread operator is (...)


// Example:1 - Copy into a new variable

// let numbers = [1, 2, 3, 4, 5]


// let number1 = [...numbers]

// console.log(number1)


// Example:2 - Merging array using spread operator


// let arr1 = [1, 2, 3]

// let arr2 = [4, 5, 6]

// let arr3 = [...arr1, ...arr2]

// console.log(arr3)


// let person1 = {
//     username: "sonic"
// }

// let person2 = {
//     age: 20
// }

// let person = { ...person1, ...person2 }

// console.log(person)



// Example:3 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function addNumbers(a, b, c, d, e) {

//     return a + b + c + d + e

// }

// console.log(addNumbers(...arr))




// Rest Opeator



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function addNumbers(...numbers) { // rest operator - packing array

    let sum = 0

    for (let count = 0; count < numbers.length; count++) {

        sum += numbers[count]

    }


    return sum

}

console.log(addNumbers(...arr)) // spread - unpacking the array