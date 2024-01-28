

let userInput = document.getElementById('input_user')

let result = document.getElementById('result')

function EvenOrOdd() {


    if (userInput.value === '') {
        alert('Please provide the number')

        return false
    }

    if (userInput.value % 2 === 0) {
        result.innerHTML = 'It is a even number'
    }
    else {
        result.innerHTML = 'It is a odd number'
    }

}