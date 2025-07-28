"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useFullContext } from "./context";
import { Footer } from "./Footer";
// import { Mixesdata } from "../Component/Playlist";
export const ShowToday = () => {
    const { fulll } = useFullContext();
    const headingref = useRef<HTMLHeadingElement>(null);
    
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

    const Throwagain =()=>{
        if(headingref.current){
            headingref.current.addEventListener("click",()=>{
                window.location.href="/showall"
            })
            
        }


    };

    React.useEffect(() => {
        Throwagain();

        return () => {
            if(headingref.current){
                headingref.current.removeEventListener("click",Throwagain);
            }
        }
    }, []);

    return (
        <div>
            Hii
        </div>
    )
    
}

   