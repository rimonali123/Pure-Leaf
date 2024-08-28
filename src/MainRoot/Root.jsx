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
// import Dashboard from "../Pages/AccountDashboard/DashboardPage/Dashboard";
import OrderPage from "../Pages/AccountDashboard/DashboardOrderPage/OrderPage";
import AccountDetailsPage from "../Pages/AccountDashboard/DashboardAccountDetailsPage/AccountDetailsPage";
import AddressForm from "../Pages/AccountPage/DashboardAddressForm/AddressForm";
import AddItemForm from "../Pages/AccountDashboard/AddItemForm/AddItemForm";
import ManageProduct from "../Pages/AccountDashboard/ManageProduct/ManageProduct";
import ManageUser from "../Pages/AccountDashboard/ManageUser/ManageUser";
import ViewCart from "../Pages/ViewCart/ViewCart";
import CheckOutpage from "../Pages/CheckOutPage/CheckOutpage";
import QuickViewPage from "../Pages/QuickViewPage/QuickViewPage";
import WishListPage from "../Pages/WishListPage/WishListPage";

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
        {
          path:"/viewCart",
          element:<ViewCart></ViewCart>
        },
       
        {
          path:"/checkOutPage",
          element:<CheckOutpage></CheckOutpage>
        },
        {
          path:"/quickViewPage/:id",
          element:<QuickViewPage></QuickViewPage>,
          loader: ({ params }) => fetch(`http://localhost:5000/cardData/${params.id}`),
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
          {
            path: "dashboardPage",
            element: <WellcomePage></WellcomePage>
          },
        {
          path: "orderPage",
          element: <OrderPage></OrderPage>
        },
       
        {
          path: "accountDetailsPage",
          element: <AccountDetailsPage></AccountDetailsPage>
        },
        {
          path: "accountDetailsPage/billingAddressEdit",
          element: <AddressForm></AddressForm>
        },
      
        {
          path: "addItemPage",
          element: <AddItemForm></AddItemForm>
        },
        {
          path: "manageProdct",
          element: <ManageProduct></ManageProduct>
        },
        {
          path: "manageUser",
          element: <ManageUser></ManageUser>
        },
        {
          path: "manageWishList",
          element: <WishListPage></WishListPage>
        },

      ]
    }
  ]);