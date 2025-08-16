"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Chill = () => {
    interface Data {
        subtitle: string;
        image_url: string;
        name: string;
    }


    const router = useRouter();
    const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

    const getimages = async () => {
        const name = "Chill";
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
        queryKey: ["chill"],
        queryFn: getimages,
        staleTime: 1000 * 300,
    });

    if (isLoading) return <p>Loading ho raha</p>;
    if (error) return <p className="text-white">{error.message}</p>;

    return (
        <div className="bg-black">
            <div className="flex flex-row justify-between  font-bold text-white p-5">
                <h1 className="text-2xl">Chill</h1>
                <p className="cursor-pointer text-lg" onClick={() => router.push("/destine?section=Chill")}>Show all</p>
            </div>

            <div className="grid grid-cols-8 gap-1 overflow-hidden bg-black ">
                {data.map((item: Data, index: number) => (

                    <div key={index} className="flex flex-col gap-3 cursor-pointer">
                        <Image
                            src={item.image_url}
                            alt="iamges"
                            width={150}
                            height={150}
                            onClick={() => getplaylist(item.name)}
                            className="w-[200px] h-[200px] object-cover"
                        />
                        <p className="text-white">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chill;
