import React from 'react'
import Veera from "../../public/veere.png"
import Image from 'next/image'
import { useState, useRef } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { useFullContext } from './context';
import { Button } from '@/components/ui/button';

import { useSearchParams } from 'next/navigation';

interface Artists {
    artist1: string;
    artist2: string;
    artist3: string;
}
export const Indisong = () => {

    const [Urls, setUrls] = useState<string[]>([]);
    const [Images, setImages] = useState<string[]>([]);
    const [Names, setnames] = useState<string[]>([]);
    const [Artist, setartist] = useState<Artists[]>([]);
    const [name, setname] = useState("Kamlesh");


    const playname = useRef<HTMLButtonElement>(null);

    const getSong = async (id: string) => {
        try {
            const tokenn = 'BQA1AP04gRgLsdlAB1XkvcK-SQn5wRHCG3K7wrtyBxoQTEhlbw1MVFesaW68Pz6Dpp5hUA_jK0GI_cOiafqQYQbQGuFx4WjeItzPp_61sKBgNEB9Dw_9kI5BANpkFr803cmdJd4d7W8C3RAr_Ql1Y_jN-3dsG7Ok9oaYt_NVGYmYStsMkDusnWnC68UbHkwXWLbv-c6F2glRkxVJxXo-QSUMqUDHw47B7zHc-e_IAPWep6StRg403Lmyw1hKzsFHFOumROqX';
            const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenn}`
                }
            });
            if (!response.ok) {
                throw new Error(response?.statusText);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    };
    const searchparam = useSearchParams();

    const getsongs = async () => {

        let value = searchparam.get("name");
        setname(value?.toString() ?? "Kamlesh");
        alert(value)
        console.log(value);

        try {
            const response = await fetch(`http://localhost:3500/songs/playlist?name=${value}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(response?.statusText);
            }

            const dataa = await response.json();
            console.log(dataa);
            for (let i = 0; i < 30; i++) {
                const get = await getSong(dataa[i].song_id);
                const song = get.external_urls.spotify;
                const name = get.name;
                const image = get.album.images[0].url;
                const artist1 = get.artists[0]?.name || '';
                const artist2 = get.artists[1]?.name || '';
                const artist3 = get.artists[2]?.name || '';

                setUrls(prev => [...prev, song]);
                setImages(prev => [...prev, image]);
                setnames(prev => [...prev, name]);
                setartist(prev => [...prev, { artist1: artist1, artist2: artist2, artist3: artist3 }])

            }

            console.log(Urls)
            console.log(Images)
            console.log(Names)
            console.log(Artist)




        } catch (error) {
            console.error(error);
        }

    };
    return (

        <div className='ml-auto' >//Arijit%20Special
            <Button onClick={getsongs} >Arijit Special</Button>
            <div className=''>
                <div className='w-3/4 h-[280px] border-2 border-amber-300 flex flex-row items-center bg-gradient-to-b from-yellow-700 to-yellow-500'>
                    <div>

                        <Image src={Veera} alt='balaji' className='h-[220px] w-[240px] mt-6 ml-10 shadow-2xl' />


                    </div>

                    <div className='flex flex-col ml-6 text-white'>
                        <p>Playlist Playlist Sangeet night</p>
                        <h1 className='text-7xl  font-extrabold'>Sangeet Night</h1>
                        <div className='mt-10'>
                            <h3>Start your Sangeet night party with this Hit </h3>
                            <span>200,014 saves • 75 songs, about 4 hr 45 min
                            </span>
                        </div>

                    </div>



                </div>
                <div className='bg-gradient-to-b from-yellow-300 to-black w-3/4'>
                    <div className='flex flex-row gap-5 items-center p-4 border-2 border-black justify-between'>
                        <div className='flex flex-row gap-5 items-center'>
                            <MdOutlinePlayCircleFilled size={70} fill='' className='cursor-pointer fill-current text-green-600' />
                            <CiCirclePlus size={40} className='cursor-pointer' />
                            <BsThreeDots size={30} className='cursor-pointer' />
                        </div>
                        <div className='flex flex-row items-center gap-4 '>
                            <span>List</span> <span><CiBoxList /></span>


                        </div>



                    </div>
                    <div className='grid grid-cols-4 mr-10 mt-5 text-white justify-between'>
                        <h1>#Title</h1>
                        <h1>Album</h1>
                        <h1>Date Added</h1>
                        <h1><CiClock2 size={20} /></h1>
                    </div>
                </div>


                {Array.from({ length: 30 }, (_, index) => (
                    <div key={index} className='grid grid-cols-4  text-white bg-gray-950   w-3/4 justify-end'>


                        <div className='flex flex-row items-center gap-0'>


                            {Images[index] && (
                                <Image
                                    src={Images[index]}
                                    alt='taswir'
                                    width={50}
                                    height={50}
                                    className='ml-2 rounded shadow-md'
                                />
                            )}


                            <div className='flex flex-col mt-5'>

                                <h1 className='font-bold'><span><a href={Urls[index]}>{Names[index]}</a></span></h1><p><span>{Artist[index]?.artist1}</span><span>{Artist[index]?.artist2}</span><span>{Artist[index]?.artist3}</span></p></div></div>
                        <h1 className='flex items-center '>Album name</h1>
                        <h1 className='flex items-center'>23/02/2023</h1>

                        <h1 className='flex items-center '>3:45</h1>
                        {/* {name} */}


                    </div>


                ))}
            </div>


        </div>
    )
}
