"use client";
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { div } from 'framer-motion/client';

type Data = {
    name : string 
    subtitle : string
    image_url : string

}
const Mixes2 = () => {
    const router = useRouter();

    async function getimages() {
        let name = 'Top Mixes';
        const response = await fetch(`http://localhost:3500/songs/image?section=${name}`,
            {
                method: 'GET'
            }
        )
        const data = response.json();
        console.log(data)
        return data

    }

    async function getplaylist(name : string) {
        const songs = await fetch(`http://localhost:3500/songs/getplaylist?name=${name}`, {
            method : 'GET'
        })
        const data = await songs.json()
        const url = data[0].url
        router.push(url)
    }



    const { data , isLoading , error } = useQuery({
        queryKey: ['data'],
        queryFn: getimages,
        staleTime: 1000 * 300
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    return (

        <div className=' bg-black'>
             <div className='text-2xl font-bold text-white p-5'>Top Mixes</div>
            <div className='grid grid-cols-8 gap-1 overflow-hidden  bg-black'>
               
                
                {data.map((item : Data , index : number) => (
                    
                    <div key={index} className='flex flex-col gap-3 cursor-pointer'>
                        <Image src={item.image_url}  alt="iamges" width={220} height={200} onClick={()=> getplaylist(item.name)} />

                        <p className='text-white'>{item.name}</p>
                    </div>
                ))}

            </div>
        </div>

    )

}

export default Mixes2
