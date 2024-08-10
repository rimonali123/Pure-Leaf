import { Outlet } from "react-router-dom";
import Navbar from "../Components/SharedComponnts/Header/Navbar";
import Footer from "../Components/SharedComponnts/Footer/Footer";


const MainLayout = () => {
    return (
        <div>

            <Navbar></Navbar>

            <div className="lg:max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default MainLayout;