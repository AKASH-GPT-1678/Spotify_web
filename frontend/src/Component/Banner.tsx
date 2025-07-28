"use client";
import React, { useEffect, useState } from 'react'
import { useFullContext } from './context'
import { Middle } from './Middle'


interface Song {
    id: number;
    publicurl: string;
    name: string;
    type: string;
    singer: string;
    minidescrip: string;
}

export const Banner = () => {
    const {fulll , checkfull } = useFullContext();

    const [data, setData] = useState<Song[]>([]);

    async function fetchall() {
        try {
            const response = await fetch('http://localhost:3500/songs/banner', {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            setData(result.data);
            console.log(result.data);
            return result;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchall();
    }, []);

    
    return (
        <div className={`${fulll ? "grid grid-cols-3 w-full ml-auto" : "grid grid-cols-4"} gap-0 bg-gray-950 mt-2`}>


            {[...data].map((dat, i) => (
                <Middle key={i} Image1={dat.publicurl} Image2={"https://storage.googleapis.com/smart_city_123/Banner/fanaa.jpg"} Heading={dat.name} Type={dat.type} Singer={dat.singer} />
            ))}

        </div>
    );
};

