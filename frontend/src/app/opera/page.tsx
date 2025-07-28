"use client";
import React from 'react'
import Image from 'next/image';
import { Leftbar1 } from '@/Component/Left';
import { Leftbar2 } from '@/Component/Left';


const page = () => {
  return (
    <div>
        <h1>Hello Opera</h1>
        <Leftbar1/>
        {/* <Leftbar2/> */}
    </div>
  )
}

export default page