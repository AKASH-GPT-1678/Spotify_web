"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";

import React from "react";

const SadSongs= () => {
    interface Data {
        subtitle: string;
        image_url: string;
        name: string;
    }

    const h1ref = useRef<HTMLHeadingElement>(null);
    const router = useRouter();

    const getimages = async () => {
        let name = "Sad Songs";
        const images = await fetch(`http://localhost:3500/songs/image?section=${name}`, {
            method: 'GET',
        });

        const response = images.json();
        return response;
    };

    async function getplaylist(name: string) {
        const songs = await fetch(`http://localhost:3500/songs/getplaylist?name=${name}`, {
            method: 'GET',
        });
        const data = await songs.json();
        const url = data[0].url;
        router.push(url);
    }

    const { data, isLoading, error } = useQuery({
        queryKey: ["sadsongs"],
        queryFn: getimages,
        staleTime: 1000 * 300,
    });

    if (isLoading) return <p>Loading ho raha</p>;
    if (error) return <p className="text-white">{error.message}</p>;

    return (
        <div className="bg-black">
            <div className="text-2xl font-bold text-white p-5">
                <h1>Biggest</h1>
            </div>

            <div className="grid grid-cols-8 gap-1 overflow-hidden bg-black ">
                {data.map((item: Data, index: number) => (

                    <div key={index} className="flex flex-col gap-3 cursor-pointer">
                        <Image
                            src={item.image_url}
                            alt="iamges"
                            width={220}
                            height={200}
                            onClick={() => getplaylist(item.name)}
                        />
                        <p className="text-white">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SadSongs;
