import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Category from "../Category/Category";
import News from "../News/News";
import Profile from "../Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Terms from "../Terms/Terms";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://daragon-news-server.vercel.app/news')

            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://daragon-news-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://daragon-news-server.vercel.app/news/${params.id}`)

            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,

            },
            {
                path: '/login',
                element: <Login></Login>,

            },
            {
                path: '/register',
                element: <Register></Register>,

            },
            {
                path: '/terms',
                element: <Terms></Terms>,

            },
        ]
    }
])