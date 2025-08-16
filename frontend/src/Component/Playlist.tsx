import React from 'react';
import { CiClock2 } from "react-icons/ci";
import { Data } from "./data.";
export const Playlist = () => {


    return (
        <div className='w-3/4 border-2 border-black h-screen'>
            <div className='border-2 border-black w-full'>

            </div>
            <div className='w-full flex flex-col'>
                <div className='flex flex-row justify-between w-11/12 ml-8 mt-5'>
                    <div >Title</div>
                    <div>Album</div>
                    <div>Data Added</div>
                    <div><CiClock2 size={25} className='mt-2' /></div>

                </div>
                <div className='w-full flex flex-row justify-between'>{Data.map((item, index) => (
                    <div key={index} className="flex flex-col gap-7 bg-gray-400 border-2 border-black w-full">
                        <div  ><p>{item.title}</p></div>
                        <p>{item.artist}</p>
                        <p>{item.genre}</p>
                        <p>{item.release_year}</p>
                    </div>
                ))}</div>
                <div className='flex flex-row justify-between w-full border-2 border-black'>


                </div>

            </div>

            <div>
                <h1>Hii </h1>
                <audio controls>
                    <source src="https://storage.googleapis.com/smart_city_123/Mitwa.mp3" type="audio/mp3" />
                </audio>
            </div>
        </div>
    )
}



