"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const SadSongs = () => {
    interface Data {
        subtitle: string;
        image_url: string;
        name: string;
    }


    const router = useRouter();
    const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

    const getimages = async () => {
        let name = "Sad Songs";
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
        queryKey: ["sadsongs"],
        queryFn: getimages,
        staleTime: 1000 * 300,
    });

    if (isLoading) return <p>Loading ho raha</p>;
    if (error) return <p className="text-white">{error.message}</p>;

    return (
<div className="bg-black">
  {/* Header */}
  <div className="text-2xl font-bold text-white p-5">
    <h1>Biggest</h1>
  </div>

  {/* Horizontal Scroll Row */}
  <div className="flex overflow-x-auto scrollbar-hide gap-4 px-5 pb-5">
    {data.map((item: Data, index: number) => (
      <div
        key={index}
        className="flex-shrink-0 flex flex-col gap-2 cursor-pointer w-[160px] sm:w-[180px] md:w-[200px]"
      >
        <Image
          src={item.image_url}
          alt="images"
          width={200}
          height={200}
          onClick={() => getplaylist(item.name)}
          className="w-full h-[200px] object-cover rounded-lg hover:scale-105 transition-transform"
        />
        <p className="text-white text-center truncate">{item.name}</p>
      </div>
    ))}
  </div>
</div>

    );
};

export default SadSongs;
