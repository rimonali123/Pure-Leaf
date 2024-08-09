import { Outlet } from "react-router-dom";
import Navbar from "../Components/SharedComponnts/Header/Navbar";
import Footer from "../Components/SharedComponnts/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;