import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Wallet from "./Wallet";
import PrivetRout from "./PrivetRout";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/profile',
                element: <PrivetRout><Profile></Profile></PrivetRout>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/wallet',
                element: <PrivetRout><Wallet></Wallet></PrivetRout>,
            },
        ]
    }

])