import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
import Faq from "../Faq/Faq";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Login/Register/Register";
import Premiem from "../Premiem/Premiem";
import CourseDettiles from "../CourseDettiles/CourseDettiles";
import PrivetRouts from "../PrivetRouts/PrivetRouts";
import ErrorPage from "../ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://learning-server-iota.vercel.app/courses')

            },
            {
                path: '/courses/:id',
                element: <CourseDettiles></CourseDettiles>,
                loader: ({ params }) => fetch(`https://learning-server-iota.vercel.app/courses/${params.id}`)

            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
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
                path: '/premiem',
                element: <PrivetRouts><Premiem></Premiem></PrivetRouts>
            },
        ]
    }
])
