

let scrollProgress = document.getElementById('scroll-progress')

let progressbar = document.getElementById('progress')

// scrollTop

// scrollHeight

// clientHeight


// console.log("Scroll Top", scrollProgress.scrollTop)

// console.log("Scroll Height", scrollProgress.scrollHeight)

// console.log('Client Height', scrollProgress.clientHeight)



// (scrollTop / (ScrollHeight - clientHeight)) * 100


function Progress() {

    let percentage = (scrollProgress.scrollTop / (scrollProgress.scrollHeight - scrollProgress.clientHeight)) * 100

    progressbar.style.width = percentage + "%"

}