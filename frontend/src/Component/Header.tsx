import { PiSpotifyLogoFill } from "react-icons/pi";
import { MdHomeFilled } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { IoBrowsers } from "react-icons/io5";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { Button } from "@/components/ui/button";
export const Header = () => {
    return (
        <div className="flex flex-row  justify-between border-2 border-black h-[70px] mb-2 bg-black">
            <div className="flex flex-row w-6/12 h-[30px] relative mt-3 gap-5">
                <PiSpotifyLogoFill size={45} className="ml-3" />
                <div>
                    <MdHomeFilled size={45} />
                </div>

                <div className="w-full h-fit ">
                    <Input className="h-[50px] w-5/12 border-2 border-black focus:border-red-500 "

                        placeholder="What do you want to Play?  CTRL + K " />
                </div>
                <IoBrowsers className="absolute ml-80 cursor-pointer" />
            </div>
            <div className="w-6/12 flex flex-row mt-3 itens-center bg-black">
                <div className="flex flex-row items-center justify-center border-2 border-black bg-black">
                    <h1 className="inline-block px-4 text-l font-bold text-white transition transform hover:scale-110 cursor-pointer">Premium</h1>
                    <h1 className="inline-block px-4 text-l font-bold text-white transition transform hover:scale-110 cursor-pointer">Support</h1>
                    <h1 className="inline-block px-4 text-l font-bold text-white transition transform hover:scale-110 cursor-pointer">Download</h1>
                </div>
                <h1>|</h1>
                <div className="flex flex-row relative  w-fit ml-8 mb-5 ">
                    <div className="flex flex-row justify-content-center mt-3 gap-7 ml-5 w-fit ">


                        <h3 className="cursor-pointer text-l font-bold transition transform hover:scale-110 flex flex-row text-white "> <MdOutlineDownloadForOffline className="cursor-pointer" />Install App</h3>

                        <h3 className="inline-block cursor-pointer font-bold transition transform hover:scale-110 text-white ">Sign Up</h3>

                    </div>

                </div>
                <Button className="inline-block p-3   h-full mt-0 w-[100px] ml-10 rounded-3xl cursor-pointer transition transform hover:scale-110 bg-white " variant={'ghost'}>Log In</Button>

            </div>

        </div>
    )

}