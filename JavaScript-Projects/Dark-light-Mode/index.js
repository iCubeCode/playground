

const toggleBtn = document.getElementById('toggle')

const container = document.getElementById('container')

function darkAndLightMode() {

    toggleBtn.classList.toggle('toggle--light')
    toggleBtn.classList.toggle('toggle--dark')


    container.classList.toggle('--container--light')
    container.classList.toggle('--container--dark')

}