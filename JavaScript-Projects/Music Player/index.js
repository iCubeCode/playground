

const song = document.getElementById('song')

const play = document.getElementById('play')
const pause = document.getElementById('pause')

const image = document.getElementById('image')

const progress = document.getElementById('progress')


function PlaySong() {

    image.classList.add('image--animation')
    play.style.display = 'none'
    pause.style.display = 'flex'

    song.volume = 0.1
    song.play()

}


function PauseSong() {

    image.classList.remove('image--animation')
    pause.style.display = 'none'
    play.style.display = 'flex'

    song.pause()
    song.currentTime = 0

}


function TrackTime() {


    progress.style.width = ((song.currentTime / song.duration) * 100) + "%"


}