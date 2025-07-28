import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { useFullContext } from './context';

export const Footer = () => {
    const {fulll , checkfull} = useFullContext();

    return (
        <div className={` h-[380px] bg-black ${fulll ? "w-full ml-auto" : "w-[1800px]" }`}>
            <div className='grid grid-cols-6 justify-evenly w-full border-2 border-black bg-black '>
                <div id='footer' className='text-white cursor-pointer'>
                    <h1 className='grid grid-rows-1 font-bold'>Company</h1>
                    <h2>About Us</h2>
                    <h2>Jobs</h2>
                    <h2>For the Record</h2>
                </div>

                <div id='footer' className='text-white cursor-pointer'>
                    <h1 className='grid grid-rows-1 font-bold'>Communities</h1>
                    <h2>For Artists</h2>
                    <h2>Developers</h2>
                    <h2>Advertising</h2>
                    <h2>Investors</h2>
                    <h2>Vendors</h2>
                </div>


                <div id='footer' className='text-white cursor-pointer'>
                    <h1 className='grid grid-rows-1 font-bold'>Useful links</h1>
                    <h2>Support</h2>
                    <h2>Free Mobile App</h2>
                </div>


                <div id='footer' className='text-white cursor-pointer'>
                    <h1 className='grid grid-rows-1 font-bold'>Spotify Plans</h1>
                    <h2>Premium Individual</h2>
                    <h2>Premium Duo</h2>
                    <h2>Premium Family</h2>
                    <h2>Premium Student</h2>
                    <h2>Spotify Free</h2>


                </div>
                <div id='footer' className='text-white cursor-pointer'></div>
                <div id='footer' className='text-white'>
                    <div className="flex space-x-4 gap-7">
                        <FaSquareInstagram size={24} />
                        <BsTwitterX size={24} />
                        <FaFacebook size={24} />
                    </div>


                </div>
            </div>


            <hr />
            <div className='bg-black flex flex-row justify-between mt-20'>

                <div>
                    <ul className="flex gap-8 ml-3 text-zinc-500 cursor-pointer
                    ">
                        <li>Legal</li>
                        <li>Safety & Privacy Center</li>
                        <li>Privacy Policy</li>
                        <li>Cookies</li>
                        <li>About Ads</li>
                        <li>Accessibility</li>
                    </ul>


                </div>
                <div>
                    <span className='text-zinc-500 mr-10 cursor-po'>© 2025 Spotify AB</span>
                </div>


            </div>




        </div>

    )
}


