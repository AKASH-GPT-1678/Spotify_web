import { IoLibrary } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { BsArrowsAngleExpand } from "react-icons/bs";
export const Leftbar1 = () => {
    return (
        <div className="bg-black h-screen w-[300px] flex flex-col">
            <h1>Hello </h1>
            <div className="text-zinc-300  flex flex-row items-center">
                <div className="flex flex-row gap-3  justify-evenly items-center hover:text-white ">
                    <IoLibrary size={40} />
                    <h2 className="text-xxl font-bold cursor-pointer">Your Library</h2>
                </div>
                <div className="flex flex-row gap-3 cursor-pointer  hover:text-white ml-auto">
                    <FaCirclePlus size={30} />
                    <BsArrowsAngleExpand size={20} />
                </div>
            </div>
            <div>
                <div>Playlist</div>
                <div>Second simple div</div>

            </div>
            <div>
                
            </div>


        </div>
    )
}


export const Leftbar2 = () => {
    return (
        <div>
            <h1>Hello </h1>
        </div>
    )
}