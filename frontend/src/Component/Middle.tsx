"use client";
import Image, { StaticImageData } from "next/image"
import { BsThreeDots } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { MdPlayCircleOutline } from "react-icons/md";
import { useRef } from "react";
import { useState } from "react";
import { motion } from 'framer-motion';
interface Props {
    Image1: string;
    Image2: string;
    Heading: string;
    Type: string;
    Singer: string;

}




export const Middle: React.FC<Props> = ({ Image1, Image2, Heading, Type, Singer }) => {

    const videoref = useRef<HTMLVideoElement>(null)

    const [show1, setshow1] = useState(false);



    const setvideo = () => {
        videoref.current?.play();
        setshow1(true)
    }

    const stopvideo = () => {
        videoref.current?.pause();
        setshow1(false)
    }
    return (
        <div className="flex flex-col">
            <div className="w-[440px] h-[550px] border-2 border-black flex flex-col relative" onMouseEnter={setvideo} onMouseLeave={stopvideo}>
                <video width="100%" height="100%" className="cursor-pointer border-2 object-cover aspect-video h-full" ref={videoref} >
                    <source src={Image1} type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>


                <div className="flex flex-row z-70 absolute top-5">
                    <Image src={Image2} height={100} width={100} alt="iamges" className="mt-9 ml-6 rounded-2xl" />
                    <div className="flex flex-col justify-center ml-5">
                        <h1 className="text-2xl font-extrabold text-zinc-50 hover:underline cursor-pointer">{Heading}</h1>
                        <p className="text-zinc-300">{Type} | <span>{Singer}</span></p>
                    </div>


                </div>






                {


                    show1 && <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}


                    > <div className="absolute bottom-6 left-4 flex flex-row justify-between w-[350px] z-20 animate-slide-up  transition-all ease-in transform translate-y-0 opacity-100 duration-0 fade-in">
                            <div className=" border-2 border-black h-[40px] p-2 text-white mt-5 rounded-2xl cursor-pointer bg-zinc-900  "><h2 className="border-white">Preoview</h2></div>
                            <div className="  border-black  flex flex-row justify-items-center gap-4  justify-evenly text-white ">
                                <BsThreeDots size={30} className="mt-6 cursor-pointer" />
                                <CiCirclePlus size={30} className="mt-6 cursor-pointer" />
                                <MdPlayCircleOutline size={70} className="cursor-pointer" />


                            </div>


                        </div> </motion.div>}







            </div>



        </div>
    )
}
