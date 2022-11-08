import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import LogOut from "../Pages/LogOut";
import MyReview from "../Pages/MyReview";
import Order from "../Pages/Order";
import Profile from "../Pages/Profile";
import PurchaseService from "../Pages/PurchaseService";
import Register from "../Pages/Register";
import ServiceDittels from "../Pages/ServiceDittels";
import Services from "../Pages/Services";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
    {
        path: '/',

        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <PrivetRoute><Services></Services></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/addServices',
                element: <PrivetRoute><AddService></AddService></PrivetRoute>
            },
            {
                path: '/MyReview',
                element: <PrivetRoute><MyReview></MyReview></PrivetRoute>
            },
            {
                path: '/logOut',
                element: <LogOut></LogOut>
            },
            {
                path: '/purchaseService',
                element: <PrivetRoute><PurchaseService></PurchaseService></PrivetRoute>,

            },
            {
                path: '/order',
                element: <PrivetRoute><Order></Order></PrivetRoute>
            },
            {
                path: '/serviceDittels/:id',
                element: <ServiceDittels></ServiceDittels>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
    }
])