import React from 'react'
import Artist from '../../Components/Artist'

import { popularArtists as ArtistsData, popularAlbums } from '../../assets/Data/data'

function Home() {
    return (
        <div className='bg-[#1c1c1c]'>
            {/* Artists */}
            <div className='px-5 py-10'>
                {/* Artists header */}
                <div className='flex justify-between px-5 py-3'>
                    <span className='text-[#fefefe] text-2xl font-bold'>Popular Artists</span>
                    <span className='text-[#a0a0a0] text-md font-bold'>Show all</span>
                </div>
                {/* Artists content */}
                <div className='flex justify-evenly'>
                    {
                        ArtistsData.map((item, index) => {
                            return (
                                <Artist
                                    imgURL={item.imguri}
                                    name={item.name}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            </div>
            {/* Albums */}
            <div className='flex justify-evenly gap-2'>
                {
                    popularAlbums.map((item, index) => {
                        return (
                            // card 
                            <div key={index} className='hover:bg-[#1f1f1f] cursor-pointer rounded-md p-1'>
                                {/* card image */}
                                <div className='w-[100%]'>
                                    <img src={item.imguri} alt='h' className='w-[100%]' />
                                </div>
                                {/* card details */}
                                <div className='px-4 py-2'>
                                    <span className='text-[#ffffff] font-bold text-lg'>{item.name}</span>
                                    <br />
                                    <span className='text-[#a0a0a0] font-bold text-md'>{item.caption}</span>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Home