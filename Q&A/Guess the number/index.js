

let userNumber = document.getElementById('number')

let result = document.getElementById('result')

let btn = document.getElementById('btn')


btn.addEventListener('click', () => {

    if (userNumber.value === '') {
        alert('Please provide the number')
        return
    }

    let number = parseInt(userNumber.value)

    let randomNumber = parseInt(Math.random() * 10)



    if (randomNumber >= 7) {
        if (number >= 7) {
            result.innerHTML = randomNumber + " " + "You Win"
            result.style.color = 'green'
        }
        else {
            result.innerHTML = randomNumber + " " + "You Loss"
            result.style.color = 'red'
        }
    }
    else {
        if (number < 7) {
            result.innerHTML = randomNumber + " " + "You Win"
            result.style.color = 'green'
        }
        else {
            result.innerHTML = randomNumber + " " + "You Loss"
            result.style.color = 'red'
        }
    }


    // if (randomNumber === number) {
    //     result.innerHTML = randomNumber + " " + "You Win"
    //     result.style.color = 'green'
    // }
    // else {
    //     result.innerHTML = randomNumber + " " + "You Loss"
    //     result.style.color = 'red'
    // }

})