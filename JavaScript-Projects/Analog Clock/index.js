

const hours = document.getElementById('hour')

const minutes = document.getElementById('minute')

const secounds = document.getElementById('secounds')


setInterval(function () {
    const currentDate = new Date()

    hours.style.transform = `translate(-50%, -50%) rotate(${currentDate.getHours() * 30}deg)`

    minutes.style.transform = `translate(-50%, -50%) rotate(${currentDate.getMinutes() * 6}deg)`

    secounds.style.transform = `translate(-50%, -50%) rotate(${currentDate.getSeconds() * 6}deg)`
}, 1000)