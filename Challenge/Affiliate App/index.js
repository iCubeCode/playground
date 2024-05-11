

let toggle = document.getElementById('toggle-bg')
let toggleBtn = document.getElementById('toggle-btn')

function toggleMode() {
    toggle.classList.toggle('light_mode')
    toggle.classList.toggle('dark_mode')

    toggleBtn.classList.toggle('light-btn')
    toggleBtn.classList.toggle('dark-btn')
}

let loginForm = document.getElementById('login-form')


setTimeout(() => {
    loginForm.classList.add('enableLogin')
}, 2000)

function enableLoginForm() {
    loginForm.classList.add('enableLogin')
}
function closeLoginForm() {
    loginForm.classList.remove('enableLogin')
}

