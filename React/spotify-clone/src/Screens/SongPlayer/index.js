import React, { useState } from 'react'

import CheckedIcon from '../../assets/Icons/checked.png'

import ShuffleIcon from '../../assets/Icons/shuffle.png'
import PreviousIcon from '../../assets/Icons/prev.png'
import NextIcon from '../../assets/Icons/next.png'
import RepeatIcon from '../../assets/Icons/repeat.png'
import ExapndIcon from '../../assets/Icons/full-screen.png'
import PlayIcon from '../../assets/Icons/play.png'
import PauseIcon from '../../assets/Icons/pause.png'

function SongPlayer({
    handlePlay,
    handlePause,
    handleNext,
    songDetails,
    currentTime
}) {

    const [isPause, setIsPause] = useState(false)

    return (
        <div className='fixed bottom-0 left-0 w-full bg-[#000000] bg-opacity-85 flex justify-between px-6 py-3'>
            {/* song details */}
            <div className='flex-1 flex items-center gap-2'>
                <div className='flex gap-3'>
                    <div>
                        <img src={songDetails.imguri} alt='' className='w-12 h-12' />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[#fefefe] text-md font-bold'>{songDetails.name}</span>
                        <span className='text-[#fefefe] text-sm'>{songDetails.artist}</span>
                    </div>
                </div>
                <div>
                    <img src={CheckedIcon} alt='' className='w-5 h-5' />
                </div>
            </div>
            {/* song controls */}
            <div className='w-[600px]'>
                <div className='flex justify-center gap-6 items-center'>
                    <img src={ShuffleIcon} alt='' className='w-4 h-4 cursor-pointer' />
                    <img src={PreviousIcon} alt='' className='w-5 h-5 cursor-pointer' />
                    <div className='w-8 h-8 rounded-full bg-[#fefefe] flex justify-center items-center cursor-pointer'>
                        {
                            isPause ?
                                <img src={PlayIcon} alt='' className='w-5 h-5'
                                    onClick={() => {
                                        setIsPause(false)
                                        handlePlay()
                                    }}
                                />
                                :
                                <img src={PauseIcon} alt='' className='w-5 h-5' onClick={() => {
                                    setIsPause(true)
                                    handlePause()
                                }} />
                        }
                    </div>
                    <img src={NextIcon} alt='' className='w-5 h-5 cursor-pointer' onClick={handleNext} />
                    <img src={RepeatIcon} alt='' className='w-4 h-4 cursor-pointer' />
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-[#fefefe] text-sm'>{currentTime === 0 ? "00:00" : formatTime(currentTime)}</span>
                    <div className='flex-1 h-1 bg-[#4d4d4d] rounded-md relative'>
                        <div className='bg-[#fefefe] absolute top-0 left-0 h-1' style={{ width: currentTime + "%" }}></div>
                    </div>
                    <span className='text-[#fefefe] text-sm'>{songDetails.time}</span>
                </div>
            </div>
            {/* expand button */}
            <div className='flex-1 flex justify-end items-center'>
                <img src={ExapndIcon} alt='' className='w-4 h-4' />
            </div>
        </div>
    )
}

export default SongPlayer;


function formatTime(time) {

    let minutes = Math.floor(time / 60);
    let raminingSecs = time % 60;

    let seconds = raminingSecs.toString().padStart(2, '0')

    return `${minutes}:${seconds}`

}