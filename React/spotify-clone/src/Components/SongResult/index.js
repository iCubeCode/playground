import React from 'react'

function SongResult(props) {
    return (
        <div className='flex justify-between items-center hover:bg-[#282828] py-2 px-1 rounded-md'
            onClick={() => props.handleGetSongDetails(props.details)}>
            <div className='flex items-center gap-3'>
                <div>
                    <img src={props.imgURI} alt='' className='w-14 h-14 rounded-lg' />
                </div>
                <div className='flex flex-col'>
                    <span className='text-[#fefefe] text-lg font-bold'>{props.songName}</span>
                    <span className='text-[#fefefe]'>{props.artist}</span>
                </div>
            </div>
            <div>
                <span className='text-[#fefefe]'>{props.time}</span>
            </div>
        </div>
    )
}

export default SongResult