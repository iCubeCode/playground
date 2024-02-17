// Objects
// Object is a collection of properties and a property contains a key and a value pair.

// Object Creation
let person = {
    name: "Steve",
    age: 24,
    isActive: false,
    fullName: function () {
        return "Hello World"
    },
    // phoneNumbers: [9898989898, 7676767676],
    phoneNumbers: {
        "tel": 7857858,
        "mobile": 9898989898
    }
}


// Accessing an Object

// console.log(person.name)
// console.log(person.age)
// console.log(person.firstName) // if property not exists in the object then it will going to return undefined.


// Updating an Object and adding a new Value

// person.name = 'Bruce'
// person.surname = 'baner'


// person.name = 100

// console.log(person)

// function
// console.log(person.fullName())


// array in object

// console.log(person.phoneNumbers[2])

// Accessing the nested object
// console.log(person.phoneNumbers.tel)