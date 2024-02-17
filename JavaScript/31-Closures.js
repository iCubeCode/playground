

// Closures

// Closures are nothing but a scope which will going to be
//  create when a inner function tries to access the outer function
// memory...



function addNumbers(a, b) {

    let result = a + b

    function print() {
        console.log(result)
    }

    print()

}

addNumbers(1, 2)