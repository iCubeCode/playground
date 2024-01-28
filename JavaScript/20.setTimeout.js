
function add() {
    console.log('This is the value', 4 + 6)
}

console.log('Outside setTimeout')

setTimeout(function () {
    add()
}, 3000)