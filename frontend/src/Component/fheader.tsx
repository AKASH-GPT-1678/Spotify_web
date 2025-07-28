"use client";
import { Pi } from 'lucide-react'
import React, { useEffect } from 'react'

import { PiSpotifyLogoFill } from 'react-icons/pi'
import { IoHomeOutline } from "react-icons/io5";
import { SlSocialSpotify } from "react-icons/sl";
import { PiHouseLight } from "react-icons/pi";
import { Input } from '@/components/ui/input';
import { CgPlayButtonO } from "react-icons/cg";
import { useFullContext } from './context';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Image from 'next/image';
import Gray from '../../public/gray.png'
import { Bell } from 'lucide-react';
export const Fheader = () => {
    const [text, settext] = React.useState("K");

    return (
        <div className='w-full border-2 border-black p-3 grid grid-cols-3 items-center gap-2  z-10'>
            <div className='underline decoration-sky-500 w-[600px] border-2'>
                <SlSocialSpotify size={50} className='cursor-pointer  ' />

            </div>
            <div className='w-[560px]  h-full flex flex-row items-center gap-5
        
        '>
                <PiHouseLight size={45} className='cursor-pointer   p-2 rounded-full  fill-stroke text-red-500 bg-gray-700' fill={"white"} />

                <Input type="text" className='p-5' placeholder='What do you want to play?' />

            </div>
            <div className=' border-2 border-black w-[600px] h-[50px] flex flex-row gap-5 items-center '>
                <Button variant={"secondary"}>Explore Premium</Button>
                <Button variant={"destructive"} className='bg-black text-white active:scale-105 cursor-pointer'>Install App</Button>
                <Bell className='cursor-pointer' />
                <div className='bg-amber-600 rounded-full w-[40px] h-[40px] cursor-pointer'>
                    <div className='flex items-center justify-center mt-2'>{text}</div>

                </div>

            </div>





        </div>
    )
}

export const DHeader = () => {
    const [img1url, setimgurl] = React.useState<string>("")
    const { fulll, checkfull } = useFullContext();

    useEffect(() => {

        const trail = document.getElementById('trail');
        trail?.addEventListener('click', () => {
            window.location.href = "http://localhost:3000/"

        })

    }, [])
    return (
        <div className={`bg-blend-lighten h-[170px] bg-linear-to-b  bg-amber-600 border-2 border-black ${fulll ? "w-full ml-auto" : "w-full"}`}>
            <div className='flex flex-row gap-2 mt-5 ml-5 '>
                <Button variant={"secondary"} className='w-fit border-2 border-black rounded-4xl cursor-pointer'>All</Button>
                <Button variant={"secondary"} className='w-fit border-2 border-black rounded-4xl cursor-pointer' onClick={() => window.location.reload()}>Music</Button>
                <Button variant={"secondary"} className='w-fit border-2 border-black rounded-4xl cursor-pointer' onClick={() => window.location.reload()}>Podcast</Button>

                <Button id='trail'>Trail Window</Button>
            </div>
            <div >
                <div className='mt-5 flex flex-row gap-5 ml-5'>
                    <div className="w-[300px] h-[60px] rounded-2xl flex flex-row cursor-pointer bg-gray-400 bg-opacity-30 backdrop-blur-md shadow-lg">


                        <CgPlayButtonO size={50} fill='green' className='absolute ml-48 text-green-500' />

                    </div>

                    <div className=' w-[300px] h-[50px] rounded-2xl flex flex-row cursor-pointer gap-5 border-2 border-black  '><Image src="https://storage.googleapis.com/smart_city_123/Spotify_cover.png" width="80" height={10} alt='song' /><h1 className='flex items-center font-bold'>{"Pandit Badri Prasad"}</h1> <div className='flex ml-auto fill-current text-green-500 '><CgPlayButtonO size={50} style={{ fill: "green" }} /></div></div>
                </div>

            </div>

        </div>
    )
}