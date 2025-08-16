"use client";
import React, {  useState } from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useRef } from 'react';
import { useEffect } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Image from 'next/image';
import Veera from "../../public/veere.png"
import { useFullContext } from './context';
export const List = () => {

    const contain = useRef<HTMLDivElement>(null);
    const [Dekh, Setdekh] = useState(false)
    // const container = contain.current
    const h1ref = useRef<HTMLHeadingElement>(null)
    const throww = () => {
        if (h1ref.current) {
            h1ref.current.addEventListener('click', () => {
                window.location.href = "http://localhost:3000/showtoday";
            });
        }
    }

    useEffect(() => {
        throww(); 
        return () => {
            if (h1ref.current) {
                h1ref.current.removeEventListener('click', throww); // Clean up to prevent memory leak
            }
        };
    }, []);


    const { fulll, checkfull } = useFullContext();
    return (
        <div className={`${fulll ? "w-full ml-auto" : "w-full"} bg-black`}>

            <div className='flex
            
            flex-row justify-between bg-black text-white '>
                <h1 className='text-2xl font-extrabold hover:underline cursor-pointer'>Recommended for Today</h1>
                <h1 ref={h1ref }>Show All</h1>

            </div>
            {/* <div className='flex flex-row gap-5'> */}
            <div className="flex flex-row  w-full h-[350px] cursor-pointer gap-2 bg-black" ref={contain}>
                {Array.from({ length: 10 }).map((_, index) => (
                    <div
                        key={index}
                        className="w-[180px] h-[270px] hover:bg-gray-700  hover:border-6 border-gray-700 bg flex-shrink-0 mt-7 p-1"
                    >

                        <Image src={Veera} alt='Noting' className='h-3/5 ' />

                        <h1 className='text-white font-bold'>Veere Di Wedding</h1>
                        <h1 className='text-white font-bold'>Arijit Singh</h1>
                        <p className='text-white'>You are listening to Veere Di Wedding</p>


                    </div>

                ))}
                {Dekh && <FaArrowAltCircleLeft size={50} className=' absolute ml-auto mt-16 ' id='Left' />}
                <FaArrowAltCircleRight size={50} className="absolute right-[500px] mt-20  cursor-pointer" id='Sher' />
            
            </div>

        </div>
    )
}
