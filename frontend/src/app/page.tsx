import { Header } from "@/Component/Header";
import { Fheader } from "@/Component/fheader";
import { DHeader } from "@/Component/fheader";
import { Morerad, Radio } from '@/Component/Radio'
import Biggest from "@/Component/Biggest";
import Chill from "@/Component/Chill";
import { Footer } from "@/Component/Footer";
import Popular from "@/Component/Popular";
import Today from "@/Component/Morelike";
import SadSongs from "@/Component/Sad";
import { Banner } from "@/Component/Banner";
import Mixes2 from "@/Component/Mixes2";
export default function Home() {
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
