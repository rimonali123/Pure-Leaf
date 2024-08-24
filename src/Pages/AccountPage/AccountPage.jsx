import { SlSpeedometer } from "react-icons/sl";
import { LuShoppingCart } from "react-icons/lu";
import { CiLocationOn, CiUser, CiLogout } from "react-icons/ci";
import { AiFillDatabase } from "react-icons/ai";
import { MdPlaylistAdd , MdManageAccounts } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Components/SharedComponnts/Header/Navbar";

const AccountPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-24 lg:max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 border border-yellow-500 h-full">
                    <div className="border border-red-500 lg:w-1/2 p-4 flex  flex-col">
                        <NavLink to="/accountPage/dashboardPage" className={({ isActive }) => isActive ? 'bg-green-500 text-white' : ''}>
                            <button className="text-start border-2 w-full border-black font-medium text-xl py-4 px-4 flex items-center gap-2 hover:bg-green-500 hover:text-white"><span><SlSpeedometer /></span>Dashboard</button>
                        </NavLink>

                        <NavLink to="/accountPage/orderPage" className={({ isActive }) => isActive ? 'bg-green-500 text-white' : ''}>
                            <button className="text-start border-2 w-full border-black font-medium text-xl py-4 px-4 flex items-center gap-2 hover:bg-green-500 hover:text-white"><span><LuShoppingCart /></span>Order</button>
                        </NavLink>

                        <NavLink to="/accountPage/addressPage" className={({ isActive }) => isActive ? 'bg-green-500 text-white' : ''}>
                            <button className="text-start border-2 w-full border-black font-medium text-xl py-4 px-4 flex items-center gap-2 hover:bg-green-500 hover:text-white"><span><CiLocationOn /></span>Address</button>
                        </NavLink>

                        <NavLink to="/accountPage/accountDetailsPage" className={({ isActive }) => isActive ? 'bg-green-500 text-white' : ''}>
                            <button className="text-start border-2 w-full border-black font-medium text-xl py-4 px-4 flex items-center gap-2 hover:bg-green-500 hover:text-white"><span><CiUser /></span>Account Details</button>
                        </NavLink>


                        <NavLink to="/accountPage/addItemPage" className={({ isActive }) => isActive ? 'bg-green-500 text-white' : ''}>
                            <button className="text-start border-2 w-full border-black font-medium text-xl py-4 px-4 flex items-center gap-2 hover:bg-green-500 hover:text-white"><span><MdPlaylistAdd /></span>Add Product</button>
                        </NavLink>

                        <NavLink to="/accountPage/manageProdct" className={({ isActive }) => isActive ? 'bg-green-500 text-white' : ''}>
                            <button className="text-start border-2 w-full border-black font-medium text-xl py-4 px-4 flex items-center gap-2 hover:bg-green-500 hover:text-white"><span><AiFillDatabase /></span>Manage Product</button>
                        </NavLink>

                        <NavLink to="/accountPage/manageUser" className={({ isActive }) => isActive ? 'bg-green-500 text-white' : ''}>
                            <button className="text-start border-2 w-full border-black font-medium text-xl py-4 px-4 flex items-center gap-2 hover:bg-green-500 hover:text-white"><span><MdManageAccounts  /></span>Manage User</button>
                        </NavLink>

                        <NavLink to="/accountPage/manageWishList" className={({ isActive }) => isActive ? 'bg-green-500 text-white' : ''}>
                            <button className="text-start border-2 w-full border-black font-medium text-xl py-4 px-4 flex items-center gap-2 hover:bg-green-500 hover:text-white"><span><MdManageAccounts  /></span>Manage Wish List</button>
                        </NavLink>


                        <button className="text-start border-2 w-full border-black font-medium text-xl py-4 px-4 flex items-center gap-2 hover:bg-green-500 hover:text-white"><span><CiLogout /></span>Log Out</button>

                    </div>

                    <div className="border border-green-500 w-full h-full">

                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;