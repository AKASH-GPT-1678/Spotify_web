"use client";
import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
const page = () => {
    interface Item {
        id: number;                 // auto-generated identity
        name: string;               // max length: 200
        url: string;                // max length: 255
        section: string;            // max length: 50
        image_url: string;          // max length: 200
        subtitle: string;           // max length: 200
    }

    const search = useSearchParams();
    const getallSongs = async () => {

        const title = search.get("section")
        alert(title)
        const response = await fetch(`http://localhost:3500/songs/allsongs?section=${title}`, {
            method: 'GET',
        })
        const data = response.json();

        return data;
    }


    const { data } = useQuery({
        queryKey: ['destine'],
        queryFn: getallSongs,
        staleTime: 1000 * 300

    });



    return (
        <div>

            {
              
                data.map((item: Item, index: number) => (
                    <div className='grid grid-cols-8'>
                    <div key={index}>
                        <Image src={item.image_url} alt='image' />
                        <p>{item.subtitle}</p>




                    </div>
                    </div>

                ))
                

            }


        </div>
    )
}

export default page