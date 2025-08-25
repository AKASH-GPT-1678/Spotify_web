'use client';
import React, { useRef } from 'react'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query';
import { useFullContext } from './context';
import { useRouter } from 'next/navigation';
import {  Radioimagess } from './Playlistt';
interface rad {
    length: number
}

export const Radio: React.FC<rad> = ({ length }) => {
    const router = useRouter();
    const { fulll, checkfull } = useFullContext();
    // const colors = [
    //     'bg-amber-100',
    //     'bg-purple-300',
    //     'bg-red-300',
    //     'bg-yellow-200',
    //     'bg-sky-300',
    //     'bg-indigo-300',
    //     'bg-teal-300',
    //     'bg-gray-300',
    //     'bg-yellow-300', // for gold
    //     'bg-orange-300', // for darkOrange
    // ];
    const throwref = useRef<HTMLHeadingElement>(null);
    const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT

    const throww = () => {
        if (throwref.current) {
            throwref.current.addEventListener('click', () => {
                window.location.href = "http://localhost:3000/deepradio"
            })
        }
    }

    const dataname = useRef<HTMLImageElement>(null);







    React.useEffect(() => {
        throww();

    }, [])

    const getplaylist = async (namee: string) => {
        try {
          
            const response = await fetch(`${endpoint}/songs/getplaylist?name=${namee}`, {
                method: 'GET',

            });

            const data = await response.json();
            const url = data[0].url;
            console.log(data[0].url);
            router.push(url)






        } catch (error) {
            console.log(error)

        }

    }





    return (
<div className="bg-black w-full">
  {/* Header */}
  <div className="flex flex-row justify-between items-center">
    <h2 className="text-white font-bold text-2xl ml-3 hover:underline">
      Popular Radio
    </h2>
    <h3
      className="font-bold cursor-pointer mr-3 hover:underline text-white"
      onClick={() => router.push("/deepradio")}
    >
      Show all
    </h3>
  </div>

 
  <div className="flex overflow-x-auto scrollbar-hide gap-3 mt-3 ml-2 pr-3">
    {Array.from({ length: 10 }).map((_, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-[180px] sm:w-[200px] h-[240px]"
      >
        <div className="flex flex-col border-2 rounded-xl hover:shadow-lg overflow-hidden w-full h-full">
          <Image
            src={Radioimagess[index].value}
            alt="radio"
            width={200}
            height={200}
            className="object-cover w-full h-[200px] cursor-pointer"
            onClick={() => getplaylist(Radioimagess[index]?.name)}
          />
          <p className="text-white text-center truncate px-2">
            {Radioimagess[index].name}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

    )


}


export const Morerad = () => {
    interface Data {
        subtitle: string
        image_url: string
        name: string

    }
    const { fulll, checkfull } = useFullContext();
    const router = useRouter();




    const getplaylist = async (name: string) => {
        try {
            const response = await fetch('http://localhost:3500/songs/getplaylist?name=' + name, {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const url = data[0].url;
            console.log(data[0].url);
            window.location.href = url
        } catch (error) {
            console.log(error)
        }


    }


    const getdata = async () => {
        let name = encodeURI("India's Best");
        const data = await fetch(`http://localhost:3500/songs/image?section=${name}`,
            {
                method: 'GET',
            },
        )
        console.log(data)
        const dataa = await data.json();
        console.log(dataa)

        return dataa

    };
    const { data, isLoading, error } = useQuery({
        queryKey: ["moreradio"],
        queryFn: getdata,
        staleTime: 1000 * 300,

    })



    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error occurred</p>;



    return (
 
                <div className="bg-black">
                    <div className="flex flex-row justify-between  font-bold text-white p-5">
                        <h1 className='text-2xl'>Popular Radio</h1>
                        <p className="cursor-pointer text-lg"  onClick={()=> router.push("/destine?section=Chill")}>Show all</p>
                    </div>
        
                    <div className="grid grid-cols-8 gap-1 overflow-hidden bg-black ">
                        {data.map((item: Data, index: number) => (
                    
                            <div key={index} className="flex flex-col gap-3 cursor-pointer">
                                <Image
                                    src={item.image_url}
                                    alt="iamges"
                                    width={150}
                                    height={150}
                                    onClick={() => getplaylist(item.name)}
                                    className='w-[200px] h-[200px] object-cover'
                                />
                                <p className="text-white">{item.name}</p>
                            </div>
        ))}
                    </div>
                </div>

    )
}


// export const Throwback = () => {
//     const [activeindex, setactiveindex] = React.useState(0);
//     const { fulll, checkfull } = useFullContext();
//     interface Data {
//         subtitle: string
//         image_url: string
//         name: string

//     }
    
//     const getplaylist = async (name: string) => {
//         try {
//             const response = await fetch(`http://localhost:3500/songs/getplaylist?name=${name}` , {
//                 method: 'GET',
//             });
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }

//             const data = await response.json();
//             const url = data[0].url;
//             console.log(data[0].url);
//             window.location.href = url
//         } catch (error) {
//             console.log(error)
//         }


//     }


//     const getdata = async () => {
//         let name = 'Throwback';
//         const data = await fetch(`http://localhost:3500/songs/image?section=${name}`,
//             {
//                 method: 'GET',
//             },
//         )
//         console.log(data)
//         const dataa = await data.json();
//         console.log(dataa)

//         return dataa

//     };
//     const { data, isLoading, error } = useQuery({
//         queryKey: ["radio"],
//         queryFn: getdata,
//         staleTime: 1000 * 300,

//     })



//     if (isLoading) return <p>Loading...</p>;
//     if (error) return <p>Error occurred</p>;




//     return (
//         <div className={`bg-black cursor-pointer  ${fulll ? "w-full ml-auto" : "w-full"}`}>
//             <div className='bg-none h-[20px] mb-0 '>
//                 <h1 className='text-white font-bold text-2xl ml-2.5 justify-center '>Throwback</h1>
//                 <h1 className='text-zinc-500 font-bold  float-right mr-3 cursor-pointer hover:underline'>Show all</h1>
//             </div>

//             <div className='grid grid-cols-8 gap-2 cursor-pointer relative   w-full'>
//                 {data.splice(0,8).map((item : Data, index : number) => (
//                     <div key={index} className='flex flex-col  rounded-2xl border-6 border-black p-1 hover:border-zinc-500 ' >

//                         <Image src={item.image_url} alt='Rocky Rani Png ' className='' width={200} height={200} data-name={item.name} onClick={() => getplaylist(item.name)} />
                 
//                         <p className='h-1/5 text-white' >{item.subtitle}</p>



//                     </div>

//                 ))}
//             </div>
//         </div>

// //     )
// }

// export const Today = () => {
//     interface Data {
//         subtitle: string
//         image_url: string
//         name: string

//     }
//     const [show, setshow] = React.useState(false);
//     const { fulll, checkfull } = useFullContext();
//     const h1ref = useRef<HTMLHeadingElement>(null);
//     const router = useRouter();

//     const getimages = async() => {
//         let name = "More of What you like"
//         const images = await fetch(`http://localhost:3500/songs/image?section=${name}`,{
//             method : 'GET',
//         })

//         const response = images.json();
//         return response
        
//     }

//     async function getplaylist(name : string) {
//         const songs = await fetch(`http://localhost:3500/songs/getplaylist?name=${name}`, {
//             method : 'GET'
//         })
//         const data = await songs.json()
//         const url = data[0].url
//         router.push(url)
//     }


//     const {data , isError , isLoading , error} = useQuery({
//         queryKey : ["like"],
//         queryFn : getimages,
//         staleTime : 1000 * 300
//     });

//     if(isLoading) return <p>Loading</p>
//     if(error) return <p>{error.message}</p>

//     return (
       
//                <div className=' bg-black'>
//                     <div className='text-2xl font-bold text-white p-5'>More of What you like</div>
//                    <div className='grid grid-cols-8 gap-1 overflow-hidden  bg-black'>
                      
                       
//                        {data.map((item : Data , index : number) => (
                           
//                            <div key={index} className='flex flex-col gap-3 cursor-pointer'>
//                                <Image src={item.image_url}  alt="iamges" width={220} height={200} onClick={()=> getplaylist(item.name)} />
       
//                                <p className='text-white'>{item.name}</p>
//                            </div>
//                        ))}
       
//                    </div>
//                </div>

//     )
// }

