
let picker = document.getElementById("color")

let container = document.getElementById('bg-container')

picker.addEventListener('change', function (event) {

    container.style.background = event.target.value

})