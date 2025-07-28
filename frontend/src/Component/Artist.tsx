import Image from "next/image"
import { Singers } from "../../Images/images"
import { Albums } from "../../Images/albums/taswir"
import { Albumdata } from "../../Images/albums/taswir"
export const Artist = () => {

    const Data = [
        {
            name: "Arijit Singh"
        },
        {
            name: "Atif Aslam"
        },
        {
            name: "Amit Trivedi"
        },
        {
            name: "Pritam"
        },
        {
            name: "A. R. Rahman"
        },
        {
            name: "Sachin Jigar"
        },
        {
            name: "Shankar Ehsaan Loy"
        },
        {
            name: "Shreya Ghoshal"
        },
        {
            name: "Vishal Mishra"
        },
        {
            name: "Vishal-Shekhar"
        },
        {
            name: "A. R. Rahman"
        },
        {
            name: "Pritam"
        },
        {
            name: "Vishal-Shekhar"
        },
        {
            name: "Sidhu Moose Wala"
        },
        {
            name: "Guru Randhawa"
        }
    ]
    return (
        <div className="flex flex-row gap-2">
            <div><h2>Popular Artist</h2> <p>Show all </p></div>

            {Array.from({ length: 10 }, (_, i) => <div key={i} className="w-[300px] h-[250px] border-2 border-black flex flex-col gap-2 cursor-pointer "><div className="border-2 border-black w-40 h-40 rounded-full flex ml-3 mt-3 "><Image src={Singers[i]} alt="arteis" className="rounded-full"></Image></div>
                <div className="grid grid-rows-1 mt-2">
                    <p className="">{Data[i]?.name}</p>
                    <p>Artist</p>
                </div>
            </div>)}
        </div>
    )
}


export const Album = () => {
    return (
        <div>
            <div>
                <h1>Popular albums</h1>

            </div>
            <div className="flex flex-row flex-wrap gap-2">
                {Array(10).fill(10).map((_, i) => (
                    <div className="flex flex-col gap-2 cursor-pointer w-[200px] h-[300px] border-2 border-black  bg-black" key={i}>
                        <div key={i}><Image src={Albums[i]} alt="albums" className=" w-full h-55"></Image></div>
                        <div className="ml-2  text-white bg-black"><h2 className="text-xxl font-bold ">{Albumdata[i]?.name}</h2><p>{Albumdata[i]?.artist}</p></div>
                    </div>
                ))}
            </div>


        </div>
    )
}