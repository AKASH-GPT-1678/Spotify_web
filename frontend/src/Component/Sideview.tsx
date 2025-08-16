"use client";
import React, { useEffect, useRef } from "react"
import { LiaFolderOpenSolid } from "react-icons/lia";
import { CiCirclePlus } from "react-icons/ci";
import { FaMusic } from "react-icons/fa";
import Image from "next/image";
import AlbumItem from "../app/asset/image.png";

export const Sideview = () => {
    const iframeref = useRef<HTMLIFrameElement>(null);


    useEffect(() => {

        const reload = () => {
            if (iframeref.current) {
                iframeref.current.src = "https://storage.googleapis.com/smart_city_123/Nora.mp4"


            }


        }
        setInterval(reload, 10000); // Adjust this time

    }, [])

    return (
        <div>
            <div className="flex flex-col gap-4 p-8 bg-black h-full">
                <div className="p-2 bg-gray-400 max-w-[100px]">
                    <LiaFolderOpenSolid size={30} className="" fill="white" />
                </div>
                <div className="p-2 bg-gray-400 max-w-[50px]">
                    <CiCirclePlus size={30} className="" fill="white" />
                </div>
                <div className="p-2 bg-gray-400 max-w-[50px]">
                    <FaMusic size={30} className="" fill="white" />
                </div>
                <div className=" bg-gray-400 max-w-[50px]">
                  <Image src={AlbumItem.src} alt="logo" width={30} height={30} className="w-full h-full" />
                </div>



            </div>

        </div>
    )
}