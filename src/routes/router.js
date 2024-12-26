import { createBrowserRouter} from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Main from "../pages/main/Main";
import PageNotFound from "../pages/error/PageNotFound";
import Brand from './../pages/brand/Brand';
import Product from './../pages/product/Product';
import Restaurant from './../pages/restaurant/Restaurant';
import Diary from './../pages/diary/Diary';
import Community from './../pages/community/Community';
import CommunityFollow from "../pages/community/CommunityFollow";
import CommunityAll from "../pages/community/CommunityAll";
import SignUp from './../pages/login/signUp/SignUp';
import Search from './../pages/search/Search';
import CustomerService from "../pages/customerService/CustomerService";
import New from "../pages/product/New";
import Best from "../pages/product/Best";
import Sale from "../pages/product/Sale";
import ProductDetails from "../pages/product/ProductDetails";
import SignIn from './../pages/login/signIn/SignIn';
import Login from './../pages/login/login/Login';
import FindId from './../pages/login/findId/FindId';
import EmailAuthenticate from "../pages/login/findId/EmailAuthenticate";
import ResetPW from "../pages/login/findPW/ResetPW";
import CommunityAllDt from "../pages/community/CommunityAllDt";
import MyPage from "../pages/mypage/MyPage";
import Posts from "../pages/mypage/Posts";
import Follow from "../pages/mypage/Follow";
import Likes from "../pages/mypage/Likes";
import Scrap from "../pages/mypage/Scrap";
import CouponBook from "../pages/mypage/CouponBook";
import Orders from "../pages/mypage/Orders";
import Reviews from "../pages/mypage/Reviews";
import Inquiries from "../pages/mypage/Inquiries";
import Shippings from "../pages/mypage/Shippings";
import AccountInfo from "../pages/mypage/AccountInfo";
import ChangePassword from "../pages/mypage/ChangePassword";
import VegeFilter from "../pages/product/filter/VegeFilter";
import MainVegeFilter from "../pages/product/filter/main/MainVegeFilter";
import CommunityFollowDt from "../pages/community/CommunityFollowDt";
import DrinksFilter from './../pages/product/filter/DrinksFilter';
import EggFilter from './../pages/product/filter/EggFilter';
import FastfoodFilter from './../pages/product/filter/FastfoodFilter';
import HealthFoodFilter from './../pages/product/filter/HealthFoodFilter';
import MeatFilter from './../pages/product/filter/MeatFilter';
import SpiceFilter from './../pages/product/filter/SpiceFilter';
import SnackFilter from './../pages/product/filter/SnackFilter';
import VegeSideFilter from './../pages/product/filter/VegeSideFilter';
import MainVegeSideFilter from "../pages/product/filter/main/MainVegeSideFilter";
import MainSnackFilter from "../pages/product/filter/main/MainSnackFilter";
import MainSpiceFilter from "../pages/product/filter/main/MainSpiceFilter";
import MainMeatFilter from "../pages/product/filter/main/MainMeatFilter";
import MainHealthFoodFilter from "../pages/product/filter/main/MainHealthFoodFilter";
import MainFastfoodFilter from "../pages/product/filter/main/MainFastfoodFilter";
import MainEggFilter from "../pages/product/filter/main/MainEggFilter";
import MainDrinksFilter from './../pages/product/filter/main/MainDrinksFilter';
import Tab1 from "../pages/customerService/Tab1";
import Tab2 from "../pages/customerService/Tab2";
import Tab3 from "../pages/customerService/Tab3";
import Notice from "../pages/customerService/Notice";
import Register from "../pages/customerService/Register";
import RegisterComplete from "../pages/customerService/RegisterComplete";



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
                        path : "vege",
                        element : <MainVegeFilter />
                    },
                    {
                        path : "drinks",
                        element : <MainDrinksFilter />
                    },
                    {
                        path : "eggs",
                        element : <MainEggFilter />
                    },
                    {
                        path : "fastfood",
                        element : <MainFastfoodFilter />
                    },
                    {
                        path : "healthfood",
                        element : <MainHealthFoodFilter />
                    },
                    {
                        path : "meat",
                        element : <MainMeatFilter />
                    },
                    {
                        path : "spice",
                        element : <MainSpiceFilter />
                    },
                    {
                        path : "snacks",
                        element : <MainSnackFilter />
                    },
                    {
                        path : "vegeSide",
                        element : <MainVegeSideFilter />
                    },
                    {
                        path : "new",
                        element : <New />,
                        children : [
                            {
                                path : "vege",
                                element : <VegeFilter />
                            },
                            {
                                path : "drinks",
                                element : <DrinksFilter />
                            },
                            {
                                path : "eggs",
                                element : <EggFilter />
                            },
                            {
                                path : "fastfood",
                                element : <FastfoodFilter />
                            },
                            {
                                path : "healthfood",
                                element : <HealthFoodFilter />
                            },
                            {
                                path : "meat",
                                element : <MeatFilter />
                            },
                            {
                                path : "spice",
                                element : <SpiceFilter />
                            },
                            {
                                path : "snacks",
                                element : <SnackFilter />
                            },
                            {
                                path : "vegeSide",
                                element : <VegeSideFilter />
                            },
                        ]
                    },
                    {
                        path : "best",
                        element : <Best />,
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
                element : <Community />,
                children : [
                    {
                        path : "CommunityAll",
                        element : <CommunityAll />,
                    },
                    {
                        path : "CommunityFollow",
                        element : <CommunityFollow />
                    },
                ]
            },
            {
                path : "/community/CommunityAllDt",
                element : <CommunityAllDt />
            },
            {
                path : "/community/CommunityFollowDt",
                element : <CommunityFollowDt />
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
                        path: "notice",
                        element: <Tab1 />,
                    },
                    {
                        path: "faq",
                        element: <Tab2 />,
                    },
                    {
                        path: "quest",
                        element: <Tab3 />,
                    }
                ]
            },
            {
                path: "/customer/notice",
                element: <Notice />
            },
            {
                path: "/customer/quest/register",
                element: <Register />
            },
            {
                path: "/customer/quest",
                element: <RegisterComplete />
            },
            {
                path : "/signIn", 
                element : <SignIn />
            },
            {
                path : "/findId",
                element : <FindId />
            },
            {
                path : "/findPW",
                element : <EmailAuthenticate />,
            },
            {
                path : "/resetPW",
                element : <ResetPW />
            },
            {
                path: "/mypage", 
                element: <MyPage />,
                children: [
                    { 
                        path: "activity/posts",
                        element: <Posts />,
                    },
                    { 
                        path: "activity/follow",
                        element: <Follow />,
                    },
                    { 
                        path: "activity/likes",
                        element: <Likes />,
                    },
                    { 
                        path: "activity/scrap",
                        element: <Scrap />,
                    },
                    { 
                        path: "activity/couponbook",
                        element: <CouponBook />,
                    },
                    { 
                        path: "shopping/orders",
                        element: <Orders />,
                    },
                    { 
                        path: "shopping/reviews",
                        element: <Reviews />,
                    },
                    { 
                        path: "shopping/inquiries",
                        element: <Inquiries />,
                    },
                    { 
                        path: "settings/shippings",
                        element: <Shippings />,
                    },
                    { 
                        path: "settings/accountInfo",
                        element: <AccountInfo />,
                    },
                    {
                        path: "settings/changePassword",
                        element: <ChangePassword />,
                    },
                ],
            },              
        ]
    },
    {
        path : "/signUp", 
        element : <SignUp />
    },
    {
        path : "/login", 
        element : <Login />
    },
    {
        path : "*",
        element : <PageNotFound />
    },
    

])

export default router;