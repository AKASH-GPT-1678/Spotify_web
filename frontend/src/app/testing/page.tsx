"use client";
import React, { useState } from 'react'
import { DHeader, Fheader } from '@/Component/fheader'
import { Sideview } from '@/Component/Sideview'
import Biggest from '@/Component/Biggest';
import { List } from '@/Component/List'
import { Indisong } from '@/Component/Indisong'
import { Morerad, Radio } from '@/Component/Radio'
import Throwback from '@/Component/Chill';
import Today from '@/Component/Morelike';
import { Banner } from '@/Component/Banner';
import { Footer } from '@/Component/Footer';
import { useFullContext } from '@/Component/context';
import Popular from '@/Component/Popular';
import { useDispatch, useSelector } from 'react-redux';
import { fullwidth } from '@/Component/redux';
import Mixes2 from '@/Component/Mixes2';
import SadSongs from '@/Component/Sad';
import Chill from '@/Component/Chill';
interface isFull {
  isFullwidth: boolean
}

const page = () => {
  const [number, setnumber] = React.useState(4);
  const { fulll, checkfull } = useFullContext();
  const dispatch = useDispatch();
  const value = useSelector((state: any) => state.fullstate.isFullwidth);



  const [fullshow, setfullshow] = useState(false);
  return (

    <div className='w-full '>
      {/* 
      <div className={`${value ? 'w-[5%]' : 'w-[20%]'}`}>
        Hello
        <button onClick={() => dispatch(fullwidth())}>Toggle Width</button>

        <Sideview />
      </div> */}


      <div className={''}>
        <Fheader />
        <DHeader />
        <Radio length={8} />
        <Biggest />
        <Mixes2 />
        <Chill />
        <Morerad />
        <Popular />
        <Today />
        <SadSongs />
        <Banner />


        <Footer />


      </div>
    </div>
  );
}

export default page
