

let input = document.getElementById('input')
let preInput = document.getElementById('previous--input')


let calculations = ""


function getTileId(id) {

    let tile = document.getElementById(id)

    calculations = calculations + tile.innerText

    input.innerHTML = calculations

}


function Calculate() {

    preInput.innerHTML = calculations

    input.innerHTML = eval(calculations)

}



function ClearCalculator() {


    input.innerHTML = 0

    preInput.innerHTML = calculations + '=' + eval(calculations)

    calculations = ''

}