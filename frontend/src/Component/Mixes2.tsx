"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import React from "react";

const Chill = () => {
    interface Data {
        subtitle: string;
        image_url: string;
        name: string;
    }

    const h1ref = useRef<HTMLHeadingElement>(null);
    const router = useRouter();
    const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

    const getimages = async () => {
        let name = "Top Mixes";
        const images = await fetch(`${endpoint}/songs/image?section=${name}`, {
            method: 'GET',
        });

        const response = images.json();
        return response;
    };

    async function getplaylist(name: string) {
        const songs = await fetch(`${endpoint}/songs/getplaylist?name=${name}`, {
            method: 'GET',
        });
        const data = await songs.json();
        const url = data[0].url;
        router.push(url);
    }

    const { data, isLoading, error } = useQuery({
        queryKey: ["data"],
        queryFn: getimages,
        staleTime: 1000 * 300,
    });

    if (isLoading) return <p>Loading ho raha</p>;
    if (error) return <p className="text-white">{error.message}</p>;

    return (
        <div className="bg-black">
            {/* Header */}
            <div className="flex flex-row justify-between font-bold text-white p-5">
                <h1 className="text-2xl">Top Mixes</h1>
                <p
                    className="cursor-pointer text-lg"
                    onClick={() => router.push("/destine?section=More Like")}
                >
                    Show all
                </p>
            </div>

            {/* Horizontal Scroll Row */}
            <div className="flex overflow-x-auto scrollbar-hide gap-4 px-5 pb-5">
                {data.map((item: Data, index: number) => (
                    <div
                        key={index}
                        className="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer w-[160px] sm:w-[180px] md:w-[200px]"
                    >
                        <Image
                            src={item.image_url}
                            alt="images"
                            width={200}
                            height={200}
                            onClick={() => getplaylist(item.name)}
                            className="object-cover rounded-lg w-full h-[200px] hover:scale-105 transition-transform"
                        />
                        <p className="text-white text-center truncate w-full">
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>


    );
};

export default Chill;
