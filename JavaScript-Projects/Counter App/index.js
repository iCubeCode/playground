

let subtract = document.getElementById('subtract')

let count = document.getElementById('count')

let addition = document.getElementById('addition')


let number = 0


addition.addEventListener('click', function () {
    number += 1
    count.innerHTML = number
})

subtract.addEventListener('click', function () {
    number -= 1
    count.innerHTML = number
})