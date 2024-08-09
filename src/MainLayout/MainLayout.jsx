import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <p>This is main layout</p>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;