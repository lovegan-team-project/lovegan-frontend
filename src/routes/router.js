import { createBrowserRouter} from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Main from "../pages/main/Main";
import PageNotFound from "../pages/error/PageNotFound";
import Brand from './../pages/brand/Brand';
import Product from './../pages/product/Product';
import Restaurant from './../pages/restaurant/Restaurant';
import Diary from './../pages/diary/Diary';
import Community from './../pages/community/Community';
import SignUp from './../pages/login/signUp/SignUp';
import Search from './../search/Search';
import CustomerService from "../pages/customerService/CustomerService";
import New from "../pages/product/New";
import Best from "../pages/product/Best";
import Sale from "../pages/product/Sale";
import ProductDetails from "../pages/product/ProductDetails";
import SignIn from './../pages/login/signIn/SignIn';
import Login from './../pages/login/login/Login';


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
                element : <Product />,
                children : [
                    {
                        path : "/product",
                        element : <New />,
                    },
                    {
                        path : "best",
                        element : <Best />
                    },
                    {
                        path : "sale",
                        element : <Sale />
                    },
                   
                ]
                
            },
            {
                path : "/details",
                element : <ProductDetails />

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
                element : <CustomerService />,
                children: [
                    {
                        path: ":details",
                        element: <CustomerService />,
                    }
                ]
            },
            {
                path : "/signIn", 
                element : <SignIn />
            },     
                        
            

        ]
    },
    {
        path : "*",
        element : <PageNotFound />
    }

])

export default router;