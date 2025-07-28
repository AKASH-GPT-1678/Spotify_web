"use client";
import React, { useState } from 'react'
import { DHeader, Fheader } from '@/Component/fheader'
import { Sideview } from '@/Component/Sideview'

import { List } from '@/Component/List'
import { Indisong } from '@/Component/Indisong'
import { Morerad, Radio } from '@/Component/Radio'
import Throwback from '@/Component/Chill';
import Today from '@/Component/Morelike';
import { Middle } from '@/Component/Middle'
import { Footer } from '@/Component/Footer';
import { useFullContext } from '@/Component/context';

import { useDispatch, useSelector } from 'react-redux';
import { fullwidth } from '@/Component/redux';
import Mixes2 from '@/Component/Mixes2';
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

    <div className='w-full flex flex-row overflow-scroll'>

      <div className={`${value ? 'w-1/12' : 'w-4/12'}`}>
        Hello
        <button onClick={() => dispatch(fullwidth())}>Toggle Width</button>
      </div>
      <div className={`${value ? 'w-11/12 ml-auto' : 'w-8/12 ml-auto'}`}>
        <Fheader />
        <DHeader />
        <Radio length={8} />
        {/* <Mixes /> */}
        <Mixes2 />
        <Today />
        <Morerad />
        <Throwback/>
        
       
        

      


      </div>
    </div>
  );
}

export default page
