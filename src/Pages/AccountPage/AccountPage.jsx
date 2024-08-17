import { SlSpeedometer } from "react-icons/sl";
import { LuShoppingCart } from "react-icons/lu";
import { CiLocationOn, CiUser, CiLogout } from "react-icons/ci";
import { Outlet } from "react-router-dom";

const AccountPage = () => {
    return (
        <div className="mt-10 lg:max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 border border-yellow-500 h-screen">
                <div className="border border-red-500 lg:w-1/2 p-4 flex  flex-col">
                    <button className="text-start border-2 border-black font-medium text-xl py-4 px-4 flex items-center gap-2 hover:bg-green-500 hover:text-white"><span><SlSpeedometer /></span>Dashboard</button>
                    <button className="text-start border-2 border-black font-medium text-xl py-4 px-4 flex items-center gap-2 hover:bg-green-500 hover:text-white"><span><LuShoppingCart /></span>Order</button>
                    <button className="text-start border-2 border-black font-medium text-xl py-4 px-4 flex items-center gap-2 hover:bg-green-500 hover:text-white"><span><CiLocationOn /></span>Address</button>
                    <button className="text-start border-2 border-black font-medium text-xl py-4 px-4 flex items-center gap-2 hover:bg-green-500 hover:text-white"><span><CiUser /></span>Account Details</button>
                    <button className="text-start border-2 border-black font-medium text-xl py-4 px-4 flex items-center gap-2 hover:bg-green-500 hover:text-white"><span><CiLogout /></span>Log Out</button>
                </div>

                <div className="border border-green-500 w-full">
                    
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;