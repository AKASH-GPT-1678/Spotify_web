"use client";
import React from 'react'
import { Footer } from '@/Component/Footer'

import { useFullContext } from '@/Component/context'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { Fheader } from '@/Component/fheader';
import { Leftbar } from '@/Component/Leftbar';
const page = () => {
    const { fulll, checkfull } = useFullContext();
    const headingref = React.useRef<HTMLHeadingElement>(null);
    const Mixesdata = [
        { value: "https://i.scdn.co/image/ab67706f0000000336c8249fea736cd36978a562" },
        { value: "https://i.scdn.co/image/ab67706f0000000385b52d601d0c906a0566d5a8" },
        { value: "https://i.scdn.co/image/ab67706f00000003ee4fadb5f44da346b91e4ff3" },
        { value: "https://i.scdn.co/image/ab67706f000000039a80a516f10a3c394603a806" },
        { value: "https://i.scdn.co/image/ab67706f000000033f7b39872b6bb36288c1a52c" },
        { value: "https://i.scdn.co/image/ab67706f00000003e863ce9df6955fed82d56257" },
        { value: "https://i.scdn.co/image/ab67706f00000003c889aef3768b5d9103c74d57" },
        { value: "https://i.scdn.co/image/ab67706f00000003fe9d2b2315dd5e7355165ee2" },
        { value: "https://i.scdn.co/image/ab67706f00000003e19df36bf48e947594c468ed" },
        { value: "https://i.scdn.co/image/ab67706f00000003e434ab960ab4149e55f40ced" },
        { value: "https://i.scdn.co/image/ab67706f0000000384de0b5ee0faf0612a6f8b6a" },
        { value: "https://i.scdn.co/image/ab67706f0000000336c8249fea736cd36978a562" },
        { value: "https://i.scdn.co/image/ab67706f00000003a8c457c18ee00b001f0c7708" },
        { value: "https://i.scdn.co/image/ab67706f00000003f5452480709e81e10e6847be" },
        { value: "https://i.scdn.co/image/ab67706f000000032b56c3f8028b17736c37e597" },
        { value: "https://i.scdn.co/image/ab67706f00000003ed9af7974cb083220f850e72" },
        { value: "https://i.scdn.co/image/ab67706f00000003af82f3851346610cd82a372c" },
    ];



    return (

        <div className='flex flex-row gap-0 overflow-auto min-h-screen'>
            <div className='absolute w-full'><Fheader /></div>

            <div className={`${fulll ? "w-1/5" : "w-1/12"} mt-28 overflow-auto min-h-screen`}>

                <Button onClick={() => checkfull(!fulll)}>Meri Jaan</Button>
                {fulll && <Leftbar />}
            </div>


            <div className={`${fulll ? "w-4/5" : "w-full"} overflow-y-auto overflow-scroll min-h-screen mt-20`}>


                <Button onClick={() => checkfull(!fulll)} className='text-white'>Change</Button>

                <div className="bg-black h-fit flex justify-between items-center px-4 py-2">
                    <h1 className="text-white font-bold text-2xl">India's Best</h1>
                    <h1 className="text-zinc-500 font-bold cursor-pointer hover:underline" ref={headingref}>
                        Show all
                    </h1>
                </div>

                <div className="grid grid-cols-8 gap-4 p-4">
                    {Mixesdata.map((mix, index) => (
                        <div
                            key={index}
                            className="flex flex-col w-[180px] h-[230px] border-2 border-white p-1 hover:border-zinc-500 border-opacity-50 rounded-lg"
                        >
                            {/* Image */}
                            <div className="h-4/5 w-full">
                                <Image
                                    src={mix.value}
                                    alt={`Mix ${index}`}
                                    width={180}
                                    height={180}
                                    className="object-cover rounded-lg"
                                />
                            </div>

                            {/* Text */}
                            <p className="h-1/5 text-white text-center text-sm mt-2">
                                Mai Raat Bhar yeh dua karu
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <Footer />
            </div>

        </div>


    )
}

export default page