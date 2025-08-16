"use client";
import React, { useRef } from "react";

export const ShowToday = () => {

    const headingref = useRef<HTMLHeadingElement>(null);


    const Throwagain = () => {
        if (headingref.current) {
            headingref.current.addEventListener("click", () => {
                window.location.href = "/showall"
            })

        }


    };

    React.useEffect(() => {
        Throwagain();

        return () => {
            if (headingref.current) {
                headingref.current.removeEventListener("click", Throwagain);
            }
        }
    }, []);

    return (
        <div>
            Hii
        </div>
    )

}

