

let spinner = document.getElementById('spin')
let btn = document.getElementById('btn')

let hide = document.getElementById('hide')
let hide_text = document.getElementById('hide_text')
let amount = document.getElementById('amount')

let all_spins = [
    {
        deg: 45,
        amount: 100
    },
    {
        deg: 135,
        amount: 750
    },
    {
        deg: 222,
        amount: 1000
    },
    {
        deg: 315,
        amount: 250
    }
]


function spinTheWheel() {

    let randomValue = Math.floor(Math.random() * (all_spins.length - 1))

    spinner.style.transform = `rotate(${all_spins[randomValue].deg + (360 * 3)}deg)`
    btn.innerHTML = 'Started'

    setTimeout(() => {
        btn.innerHTML = 'Spin'
        hide.style.display = 'block'
        hide_text.style.display = 'block'
        amount.innerHTML = all_spins[randomValue].amount
    }, 2000)
}