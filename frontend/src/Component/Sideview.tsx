"use client";
import React, { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button";

export const Sideview = () => {
    const iframeref = useRef<HTMLIFrameElement>(null)
    const [play, setplat] = React.useState(true)



    const Handlepause = () => {
        setplat(!play)

        if (play == false) {
            iframeref.current?.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
        };
    }

    useEffect(() => {

        const reload = () => {
            if (iframeref.current) {
                iframeref.current.src = "https://storage.googleapis.com/smart_city_123/Nora.mp4"


            }


        }
        const interval = setInterval(reload, 10000); // Adjust this time

    }, [])

    return (
        <div>
            <div className="w-[20%] h-screen border-2 border-black">
                <div className="border-3 border-black">
                    <iframe src="https://storage.googleapis.com/smart_city_123/Nora.mp4" ref={iframeref} height="600" width="full" allow="autoplay" title="Iframe Example" className="mt-0 w-full ]"></iframe>
                    <Button onClick={Handlepause}>Pause</Button>

                </div>

            </div>
        </div>
    )
}