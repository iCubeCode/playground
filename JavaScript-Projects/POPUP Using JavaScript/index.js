

let POPUP = document.getElementById('popup')



setTimeout(function () {
    POPUP.classList.remove('popup--none')
}, 5000)



function OpenPOPUP() {

    POPUP.classList.remove('popup--none')

}


function closePOPUP() {

    POPUP.classList.add('popup--none')

}