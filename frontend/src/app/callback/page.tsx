"use client";
import React from 'react'
import { DHeader, Fheader } from '@/Component/fheader'
import { Morerad, Radio } from '@/Component/Radio'
import Throwback from '@/Component/Chill';
import Today from '@/Component/Morelike';
import { useDispatch, useSelector } from 'react-redux';
import { fullwidth } from '@/Component/redux';
import Mixes2 from '@/Component/Mixes2';


const CallBack = () => {

  const dispatch = useDispatch();
  const value = useSelector((state: any) => state.fullstate.isFullwidth);




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
        <Throwback />







      </div>
    </div>
  );
}

export default CallBack;
