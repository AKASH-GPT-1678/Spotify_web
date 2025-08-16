"use client";
import React from 'react'
import { DHeader, Fheader } from '@/Component/fheader'
import Biggest from '@/Component/Biggest';
import { Morerad, Radio } from '@/Component/Radio'
import Today from '@/Component/Morelike';
import { Banner } from '@/Component/Banner';
import { Footer } from '@/Component/Footer';
import Popular from '@/Component/Popular';
import Mixes2 from '@/Component/Mixes2';
import SadSongs from '@/Component/Sad';
import Chill from '@/Component/Chill';


const Testing = () => {





  return (

    <div className='w-full '>



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

export default Testing;
