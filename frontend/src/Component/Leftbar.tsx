import { Button } from "@/components/ui/button"
import { CiGlobe } from "react-icons/ci";

export const Leftbar = () => {
    return (
        <div className="  h-screen w-full  border-2 border-black  bg-zinc-900">
            <div className="flex justify-between w-full border-2 border-black mb-10 text-white text-xxl font-bold">
                <h1>Your Library</h1>
                <span className="cursor-pointer text-2xl">+</span>




            </div>
            <div>
                <div className="flex flex-col gap-2 p-5 bg-gray-900">
                    <h1 className="text-white text-xxl font-bold">Create your first Playlist</h1>
                    <p className="text-white ">Its Easy we will help you</p>
                    <Button className="w-4/12 cursor-pointer " variant={"secondary"}>Create Playlist</Button>

                </div>
                <div className="flex flex-col gap-2 p-5 bg-gray-900">
                    <h1 className="text-white text-xxl font-bold">Lets find Some Podcast to follow </h1>
                    <p className="text-white">We Will Keep you updated on new podcast</p>
                    <Button className="w-4/12 cursor-pointer" variant={"secondary"}>Browse Podcast</Button>

                </div>
            </div>
            <div className="mt-56 ml-5">
                <ul className="grid grid-cols-4">
                    <li className="text-sm text-white">Legal</li>
                    <li className="text-sm text-white">Safety Privacy & Centre</li>
                    <li className="text-sm text-white">Privacy Policy </li>
                    <li className="text-sm text-white">Cookies</li>
                    <li className="text-sm text-white">About Ads</li>
                    <li className="text-sm text-white">Accessiblity</li>
                </ul>
                <Button className="mt-5 cursor-pointer "><CiGlobe />English</Button>
            </div>

        </div>
    )
}