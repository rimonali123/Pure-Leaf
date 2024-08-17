import {
    createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ShopPage from "../Pages/ShopPage/ShopPage";
import BlogPage from "../Pages/BlogPage/BlogPage";
import AboutUsPage from "../Pages/AboutUs/AboutUsPage";
import ContactUsPage from "../Pages/ContactUs/ContactUsPage";
import FaqPage from "../Pages/FaqPag/FaqPage";
import Login from "../Pages/Login_Register_Page/LoginPage/Login";
import Register from "../Pages/Login_Register_Page/RegisterPage/Register";
import AccountPage from "../Pages/AccountPage/AccountPage";
import WellcomePage from "../Pages/AccountPage/DashboardWellcomePage/WellcomePage";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path:"/shopPage",
          element: <ShopPage></ShopPage>
        },
        {
          path:"/blogpage",
          element: <BlogPage></BlogPage>
        },
        {
          path:"/aboutUs",
          element: <AboutUsPage></AboutUsPage>
        },
        {
          path:"/contactUs",
          element: <ContactUsPage></ContactUsPage>
        },
        {
          path:"/faq",
          element:<FaqPage></FaqPage>
        },
        
        {
          path:"/loginPage",
          element: <Login></Login>
        },
        
        {
          path:"/registerPage",
          element:<Register></Register>
        },
       
      ]
    },

    {
      path: "/accountPage",
      element: <AccountPage></AccountPage>,
      children: [
        {
            index:true,
            element:<WellcomePage></WellcomePage>
        },

      ]
    }
  ]);