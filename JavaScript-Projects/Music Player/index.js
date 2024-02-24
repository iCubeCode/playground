


let song = document.getElementById('song')

let play = document.getElementById('play')

let pause = document.getElementById('pause')

let progress = document.getElementById('progress')


function PlaySong() {


    play.style.display = 'none'
    pause.style.display = 'flex'

    song.volumne = 0.05
    song.play()

}


function PauseSong() {

    play.style.display = 'flex'
    pause.style.display = 'none'

    song.currentTime = 0
    song.pause()

}



song.addEventListener('timeupdate', () => {


    let percentage = Math.floor((song.currentTime / song.duration) * 100)

    progress.style.width = percentage + "%"

})