'use client';
import React, { SetStateAction, use, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Rocky from '../../public/honey.png'
import { useQuery } from '@tanstack/react-query';
import { CirclePlay } from 'lucide-react';
import { useFullContext } from './context';
import { SiNuke } from 'react-icons/si';
import { useRouter } from 'next/navigation';
import { Radioimages, Radioimagess } from './Playlistt';
import { json } from 'stream/consumers';
interface rad {
    length: number
}

export const Radio: React.FC<rad> = ({ length }) => {
    const router = useRouter();
    const { fulll, checkfull } = useFullContext();
    const colors = [
        'bg-amber-100',
        'bg-purple-300',
        'bg-red-300',
        'bg-yellow-200',
        'bg-sky-300',
        'bg-indigo-300',
        'bg-teal-300',
        'bg-gray-300',
        'bg-yellow-300', // for gold
        'bg-orange-300', // for darkOrange
    ];
    const throwref = useRef<HTMLHeadingElement>(null);

    const throww = () => {
        if (throwref.current) {
            throwref.current.addEventListener('click', () => {
                window.location.href = "http://localhost:3000/deepradio"
            })
        }
    }

    const dataname = useRef<HTMLImageElement>(null);

    // const {data} = useQuery({
    //     queryKey : ['radio'], 
    //     queryFn : []
    // }

    // )





    useEffect(() => {
        throww();

    }, [])

    const getplaylist = async (namee: string) => {
        try {
            alert(namee)
            const response = await fetch(`http://localhost:3500/songs/getplaylist?name=${namee}`, {
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
        <div className={`bg-black cursor-pointer  ${fulll ? "w-full ml-auto" : "w-full"}`}>
            <h2 className='text-white font-bold text-2xl ml-3 hover:underline '>Popular Radio</h2>
            <h3 className='text-zinc-500 font-bold float-right cursor-pointer mr-3 hover:underline' ref={throwref}>Show all</h3>
            <div className='flex flex-row  flex-nowrap gap-2 cursor-pointer mt-3 ml-2 '>

                {Array.from({ length: 10 }).map((_, index) => (
                    <div className='h-[270px]  flex-row flex-wrap w-fit' key={index}>



                        <div className={`flex flex-col   border-2 hover:shadow-lg object-cover w-[200px] h-[220px] `}   >
                            <Image src={Radioimagess[index].value} alt='images' width={180} height={220} ref={dataname} onClick={() => getplaylist(Radioimagess[index]?.name)} />
                            <p className='text-white'>{Radioimagess[index].name}</p>


                        </div>


                    </div>



                ))}
            </div>





        </div >
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
        <div className={`bg-black cursor-pointer  ${fulll ? "w-full ml-auto" : "w-full"}`}>
            {/* <div className='text-white'>{JSON.stringify(data)}</div> */}
            <div className='bg-black h-fit'>
                <h1 className='text-white font-bold text-2xl ml-2.5 '>India's Best</h1>
                <h1 className='text-zinc-500 font-bold  float-right mr-3 cursor-pointer hover:underline' id='' onClick={() =>router.push('/destine?section=India%27s+Best') }>Show all</h1>
            </div>
            <div className='grid grid-cols-8 gap-1 cursor-pointer   bg-black w-full '>

                {
                    data.slice(0,8).map((item: Data, index: number) => (
                        <div key={index} className='flex flex-col  border-2 object-cover border-black p-1 hover:border-zinc-500 border-opacity-50'>
                            <Image src={data[index].image_url} alt='Rocky Rani Png' className='w-[200px] h-[200px]' width={150} height={150} data-name={item.name} onClick={() => getplaylist(item.name)} />
                            <p className='h-1/5 text-white'>{item.subtitle}</p>
                        </div>
                    ))
                }

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

