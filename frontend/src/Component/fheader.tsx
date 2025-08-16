"use client";
import React, { useEffect } from 'react'

import { HiDownload } from "react-icons/hi";
import { Input } from '@/components/ui/input';
import { useFullContext } from './context';
import { Button } from '@/components/ui/button';
import { IoHomeSharp } from "react-icons/io5";
import { Bell } from 'lucide-react';
export const Fheader = () => {
    const [text, settext] = React.useState("K");

    return (
        <div className='w-full border-2 border-black bg-black p-3 flex flex-row justify-between items-center gap-2  z-10'>

            <div className='w-[560px]  h-full flex flex-row items-center gap-5
            md:ml-20
        
        '>
                <IoHomeSharp size={45} className='cursor-pointer   p-2 rounded-full  fill-stroke text-red-500 bg-gray-600' fill={"white"} />

                <Input type="text" className='p-5 rounded-2xl border-2 bg-gray-700 border-gray-200 hover:border-white  placeholder:font-semibold  placeholder:text-white' placeholder='What do you want to play?' />

            </div>
            <div className=' w-fit h-[50px] flex flex-row gap-5 items-center '>
                <Button variant={"secondary"} className='bg-white text-black active:scale-105 cursor-pointer rounded-2xl font-bold py-2'>Explore Premium</Button>
                <Button variant={"destructive"} className='bg-black  active:scale-105 cursor-pointer text-gray-400 hover:text-white font-bold'>
                    <HiDownload className='cursor-pointer' fill='white' />


                    Install App</Button>
                <Bell className='cursor-pointer' fill='white' />
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
    const [active, setActive] = React.useState<string>("");

    useEffect(() => {

        const trail = document.getElementById('trail');
        trail?.addEventListener('click', () => {
            window.location.href = "http://localhost:3000/"

        })

    }, [])
    return (
        <div className={`bg-blend-lighten h-[80px] bg-linear-to-b  bg-gray-900 border-2 border-black ${fulll ? "w-full ml-auto" : "w-full"}`}>
            <div className='flex flex-row gap-2 mt-5 ml-5 '>
                <Button
                    variant="secondary"
                    className={`w-fit bg-gray-600 border-2 border-black rounded-4xl cursor-pointer text-white ${active === "all" ? "bg-white text-black" : ""}`}

                    onClick={() => setActive("all")}
                >
                    All
                </Button>

                <Button
                    variant="secondary"
                    className={`w-fit bg-gray-600 border-2 border-black rounded-4xl cursor-pointer text-white ${active === "music" ? "bg-white text-black" : ""}`}
                    onClick={() => setActive("music")}
                >
                    Music
                </Button>

                <Button
                    variant="secondary"
                    className={`w-fit bg-gray-600 border-2 border-black rounded-4xl cursor-pointer text-white ${active === "podcast" ? "bg-white text-black" : ""}`}
                    onClick={() => setActive("podcast")}
                >
                    Podcast
                </Button>


            </div>
            <div >
                {/* <div className='mt-5 flex flex-row gap-5 ml-5'>
                    <div className="w-[300px] h-[60px] rounded-2xl flex flex-row cursor-pointer bg-gray-400 bg-opacity-30 backdrop-blur-md shadow-lg">


                        <CgPlayButtonO size={50} fill='green' className='absolute ml-48 text-green-500' />

                    </div>

                    <div className=' w-[300px] h-[50px] rounded-2xl flex flex-row cursor-pointer gap-5 border-2 border-black  '><Image src="https://storage.googleapis.com/smart_city_123/Spotify_cover.png" width="80" height={10} alt='song' /><h1 className='flex items-center font-bold'>{"Pandit Badri Prasad"}</h1> <div className='flex ml-auto fill-current text-green-500 '><CgPlayButtonO size={50} style={{ fill: "green" }} /></div></div>
                </div> */}

            </div>

        </div>
    )
}