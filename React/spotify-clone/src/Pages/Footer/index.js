import React from 'react'

import InstaIcon from '../../assets/Icons/insta.png'
import FBIcon from '../../assets/Icons/fb.png'
import XIcon from '../../assets/Icons/x.png'

function Footer() {
    return (
        <div className='px-12 py-24 bg-[#121212]'>
            <div className='flex justify-evenly'>
                <div>
                    <ul className='flex flex-col gap-[5px]'>
                        <span className='text-[#fefefe] text-md font-bold'>Company</span>
                        <li className='text-[#afaeae] text-sm'>About</li>
                        <li className='text-[#afaeae] text-sm'>Jobs</li>
                        <li className='text-[#afaeae] text-sm'>For the Record</li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-[5px]'>
                        <span className='text-[#fefefe] text-md font-bold'>Communities</span>
                        <li className='text-[#afaeae] text-sm'>For Artists</li>
                        <li className='text-[#afaeae] text-sm'>Developers</li>
                        <li className='text-[#afaeae] text-sm'>Advertising</li>
                        <li className='text-[#afaeae] text-sm'>Investors</li>
                        <li className='text-[#afaeae] text-sm'>Vendors</li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-[5px]'>
                        <span className='text-[#fefefe] text-md font-bold'>Useful Links</span>
                        <li className='text-[#afaeae] text-sm'>Support</li>
                        <li className='text-[#afaeae] text-sm'>Free Mobile App</li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-[5px]'>
                        <span className='text-[#fefefe] text-md font-bold'>Spotify Plans</span>
                        <li className='text-[#afaeae] text-sm'>Premium Individual</li>
                        <li className='text-[#afaeae] text-sm'>Premium Duo</li>
                        <li className='text-[#afaeae] text-sm'>Premium Family</li>
                        <li className='text-[#afaeae] text-sm'>Premium Student</li>
                        <li className='text-[#afaeae] text-sm'>Spotify Free</li>
                    </ul>
                </div>
                <div className='flex w-[25%] justify-end gap-8 items-start'>
                    <div className='bg-[#292929] rounded-full p-2 hover:scale-105'>
                        <img src={InstaIcon} alt='insta' className='w-6 h-6' />
                    </div>
                    <div className='bg-[#292929] rounded-full p-2 hover:scale-105'>
                        <img src={XIcon} alt='insta' className='w-6 h-6' />
                    </div>
                    <div className='bg-[#292929] rounded-full p-2 hover:scale-105'>
                        <img src={FBIcon} alt='insta' className='w-6 h-6' />
                    </div>
                </div>
            </div>
            <div className='my-20 border-t-[0.5px] border-[#afaeae] w-full'>
                <span className='text-[#afaeae] block p-5 text-lg'>© 2024 Spotify AB</span>
            </div>
        </div>
    )
}

export default Footer;