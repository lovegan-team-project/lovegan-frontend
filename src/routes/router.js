import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Main from "../pages/main/Main";
import PageNotFound from "../pages/error/PageNotFound";
import Brand from './../pages/brand/Brand';
import Product from './../pages/product/Product';
import Restaurant from './../pages/restaurant/Restaurant';
import Diary from './../pages/diary/Diary';
import Community from './../pages/community/Community';
import Login from './../pages/login/login/Login';
import SignUp from './../pages/login/signUp/SignUp';
import Search from './../search/Search';
import CustomerService from "../pages/customerService/CustomerService";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout />, 
        children : [
            {
                path : "/",
                element : <Main />,
                
            },
            {
                path : "/brand",
                element : <Brand />
            },
            {
                path : "/product",
                element : <Product />
            },
            {
                path : "/restaurant",
                element : <Restaurant />
            },
            {
                path : "/diary",
                element : <Diary />
            },
            {
                path : "/community",
                element : <Community />
            },
            {
                path : "/login", 
                element : <Login />
            },
            {
                path : "/signUp", 
                element : <SignUp />
            },
            {
                path : "/search", 
                element : <Search />
            },
            {
                path : "/customerService", 
                element : <CustomerService />
            },
                        
            

        ]
    },
    {
        path : "*",
        element : <PageNotFound />
    }

])

export default router;