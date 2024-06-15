

let btn = document.getElementById('btn')

// click - single click

// btn.addEventListener('click', (e) => {
//     alert('This is a click event')
// })


// dblclick - double click
btn.addEventListener('dblclick', (e) => {
    alert('This is a double click event')
})


let dropdown = document.getElementById('dropdown')

let list = document.getElementById('list')

// mouseenter

dropdown.addEventListener('mouseenter', () => {
    list.style.display = 'block'
})

// mouseleave

dropdown.addEventListener('mouseleave', () => {
    list.style.display = 'none'
})

list.addEventListener('mouseenter', () => {
    list.style.display = 'block'
})

list.addEventListener('mouseleave', () => {
    list.style.display = 'none'
})


// keyboard events


// input

let text = document.getElementById('txt')

let text_helper = document.getElementById('txt_helper')

// text.addEventListener('input', (e) => {
//     // console.log(e.target.value)
//     if (e.target.value.length === 0) {
//         text_helper.innerHTML = ''
//     }
//     else if (e.target.value.length < 3) {
//         text_helper.innerHTML = 'Username should be more then 3 char'
//     }
//     else {
//         text_helper.innerHTML = ''
//     }


// })


text.addEventListener('keydown', (e) => {
    console.log(e)

    if (e.key === 'Control') {
        text_helper.innerHTML = 'I Clicked Control'
    }

})


window.addEventListener('keypress', (e) => {
    console.log(e)
})