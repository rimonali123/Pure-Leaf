import {
    createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ShopPage from "../Pages/ShopPage/ShopPage";
import BlogPage from "../Pages/BlogPage/BlogPage";

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
        
      ]
    },
  ]);