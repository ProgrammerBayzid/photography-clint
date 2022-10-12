import { async } from "q";
import { createBrowserRouter } from "react-router-dom";
import Blog from "./Blog";
import ErrorPage from "./ErrorPage";
import Main from "./Main";
import QuixDeteails from "./QuixDeteails";
import Statistics from "./Statistics";
import Topics from "./Topics";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Topics></Topics>
            },
            {
                path: '/quiz/:quizId',
                loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
                element: <QuixDeteails></QuixDeteails>

            },
            {
                path: '/statistics',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Statistics></Statistics>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
])