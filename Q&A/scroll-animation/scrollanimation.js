
let section1 = document.getElementById('section1')
let section2 = document.getElementById('section2')
let section3 = document.getElementById('section3')
let section4 = document.getElementById('section4')
let section5 = document.getElementById('section5')



window.addEventListener('scroll', (e) => {
    // console.log("Section2", section2.getBoundingClientRect().top)

    // Section 1

    let section1topvalue = section1.getBoundingClientRect().top
    if (section1topvalue < -266) {
        // operations
        section1.style.opacity = 0
        section1.style.transition = '2s'
    }
    else {
        section1.style.transition = '2s'
        section1.style.opacity = 1
    }


    // section 2

    let section2topvalue = section2.getBoundingClientRect().top

    if (section2topvalue < -238) {
        section2.style.opacity = 0
        section2.style.transition = '2s'
    }
    else if (section2topvalue < 161) {
        section2.style.transition = '2s'
        section2.style.opacity = 1
    }
    else {
        section2.style.opacity = 0
    }


    // Section 3 

    let image2 = document.getElementById('img2')

    let section3topvalue = section3.getBoundingClientRect().top

    if (section3topvalue < -300) {
        // operations
        image2.style.left = 0
        image2.style.transition = '2s'
    }
    else {
        image2.style.transition = '2s'
        image2.style.left = -600
    }

})