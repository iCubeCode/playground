import React, { useEffect, useMemo, useState } from 'react'
import SongResult from '../../Components/SongResult';

import PlayIcon from '../../assets/Icons/play-green.png'

import { SongsList } from '../../assets/Data/data'

function SearchResults({ searchText, handleGetSongDetails }) {

    const [isHover, setIsHover] = useState(false);

    let FilteredSongList = useMemo(() => {

        if (searchText !== '') {
            return SongsList.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()))
        }

        return []

    }, [searchText])

    if (FilteredSongList.length === 0) {
        return <h1>No Data</h1>
    }

    return (
        <div className='py-10 px-4 bg-[#121212]'>
            <div className='flex gap-4 items-center'>
                <span className='bg-[#fefefe] text-[#2a2a2a] px-5 py-1 rounded-full text-md'>All</span>
                <span className='bg-[#2a2a2a] text-[#fefefe] px-5 py-1 rounded-full text-md'>Songs</span>
                <span className='bg-[#2a2a2a] text-[#fefefe] px-5 py-1 rounded-full text-md'>Albums</span>
                <span className='bg-[#2a2a2a] text-[#fefefe] px-5 py-1 rounded-full text-md'>Profiles</span>
                <span className='bg-[#2a2a2a] text-[#fefefe] px-5 py-1 rounded-full text-md'>Playlists</span>
                <span className='bg-[#2a2a2a] text-[#fefefe] px-5 py-1 rounded-full text-md'>Artists</span>
                <span className='bg-[#2a2a2a] text-[#fefefe] px-5 py-1 rounded-full text-md'>Podcasts & shows</span>
            </div>
            <div className='py-5 flex gap-10'>
                {/* first top result */}
                <div className='w-[350px] py-5'>
                    <div className='mb-3'>
                        <span className='text-2xl text-[#fefefe] font-bold'>Top Result</span>
                    </div>
                    <div className='bg-[#181818] rounded-lg px-6 py-8 w-full hover:bg-[#282828] cursor-pointer relative'
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        <img src={FilteredSongList[0].imguri} alt='' className='w-24 h-24 rounded-lg' />
                        <p className='text-[#fefefe] text-xl font-bold mt-3'>{FilteredSongList[0].name}</p>
                        <span className='text-[#fefefe] block mt-3 text-lg'>song</span>
                        <p className='text-[#fefefe] font-bold mt-3'>{FilteredSongList[0].artist}</p>
                        {
                            isHover && (
                                <div className='w-12 h-12 bg-[#1ed760] rounded-full flex justify-center items-center absolute bottom-5 right-4'
                                    onClick={() => handleGetSongDetails(FilteredSongList[0])}
                                >
                                    <img src={PlayIcon} alt='' className='w-6 h-6' />
                                </div>
                            )
                        }
                    </div>
                </div>
                {/* results */}
                <div className='w-[700px] py-5'>
                    <div className='mb-3'>
                        <span className='text-2xl text-[#fefefe] font-bold'>Songs</span>
                    </div>
                    <div>
                        {
                            FilteredSongList.slice(0, 5).map((item, index) => {
                                return (
                                    <SongResult
                                        key={index}
                                        imgURI={item.imguri}
                                        songName={item.name}
                                        artist={item.artist}
                                        time={item.time}
                                        details={item}
                                        handleGetSongDetails={handleGetSongDetails}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults;