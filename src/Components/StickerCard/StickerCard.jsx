import { IoStarOutline } from "react-icons/io5";
import { MdOutlineVerified } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const StickerCard = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-between w-full mx-auto mt-10">
            <div className=" text-center w-full mx-auto border-r-2 border-black dark:bg-gray-50 dark:text-gray-900" >

                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600"><IoStarOutline className="text-5xl w-full mx-auto mb-2 text-green-600 font-bold" /></span>
                    <h2 className="text-2xl font-bold tracking-wide">Top Rank Farms</h2>
                </div>
                <p className="dark:text-gray-800">Ut facilisis luctus elit id ornare. <br /> Aenean non sem risus.</p>
            </div>
            <div className=" text-center w-full mx-auto lg:border-r-2 border-black dark:bg-gray-50 dark:text-gray-900" >

                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600"><MdOutlineVerified className="text-5xl w-full mx-auto mb-2 text-green-600 font-bold" /></span>
                    <h2 className="text-2xl font-bold tracking-wide">Organic Certificated</h2>
                </div>
                <p className="dark:text-gray-800">Etiam tempus nulla et dolor sagitti eu ultricies.</p>
            </div>
            <div className=" text-center w-full mx-auto border-r-2 border-black dark:bg-gray-50 dark:text-gray-900" >

                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600"><GiElectric className="text-5xl w-full mx-auto mb-2 text-green-600 font-bold" /></span>
                    <h2 className="text-2xl font-bold tracking-wide">Fast Delivery</h2>
                </div>
                <p className="dark:text-gray-800">Ut facilisis luctus elit id ornare. <br /> Aenean non sem risus.</p>
            </div>
            <div className=" text-center w-full mx-auto  border-black dark:bg-gray-50 dark:text-gray-900" >

                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600"><IoCheckmarkDoneSharp className="text-5xl w-full mx-auto mb-2 text-green-600 font-bold" /></span>
                    <h2 className="text-2xl font-bold tracking-wide">Trusted Products</h2>
                </div>
                <p className="dark:text-gray-800">Etiam tempus nulla et dolo.</p>
            </div>
        </div>
    );
};

export default StickerCard;