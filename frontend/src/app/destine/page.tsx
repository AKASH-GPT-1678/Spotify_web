"use client";
import React from 'react'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import { useFullContext } from '@/Component/context';
import { Footer } from '@/Component/Footer';
import { Fheader } from '@/Component/fheader';
interface Item {
    id: number;                 // auto-generated identity
    name: string;               // max length: 200
    url: string;                // max length: 255
    section: string;            // max length: 50
    image_url: string;          // max length: 200
    subtitle: string;           // max length: 200
};


const Destine = () => {
    const [data, setData] = React.useState<Item[]>([]);
    const { fulll, checkfull } = useFullContext();


    const search = useSearchParams();
    const getallSongs = async () => {

        const title = search.get("section");

        const response = await axios.get(`http://localhost:3500/songs/allsongs?section=${title}`, {
            method: 'GET',
        })
        checkfull(true);

        const data = response.data;
        setData(data);
        console.log(data)
        console.log(data)

        return data;
    }


    React.useEffect(() => {
        getallSongs();
    }, []);


    return (
        <div>

            <div className={`${fulll ? "w-4/5" : "w-full"} overflow-y-auto overflow-scroll min-h-screen bg-black`}>
                <Fheader />





                <div className="bg-black h-fit flex justify-between items-center px-4 py-2">
                    <h1 className="text-white font-bold text-2xl">India&#39;s Best</h1>
                    <h1 className="text-zinc-500 font-bold cursor-pointer hover:underline">
                        Show all
                    </h1>
                </div>

                <div className="grid grid-cols-8 gap-4 p-4">
                    {data.map((mix, index) => (
                        <div
                            key={index}
                            className="flex flex-col w-[180px] h-[230px] border-2 border-white p-1 hover:border-zinc-500 border-opacity-50 rounded-lg"
                        >

                            <div className="h-4/5 w-full">
                                <Image
                                    src={mix.image_url}
                                    alt={`Mix ${index}`}
                                    width={180}
                                    height={180}
                                    className="object-cover rounded-lg"
                                />
                            </div>


                            <p className="h-1/5 text-white text-center text-sm mt-2">
                                Mai Raat Bhar yeh dua karu
                            </p>
                        </div>
                    ))}
                </div>


                <Footer />
            </div>



        </div>
    )
}

export default Destine;