import { async } from "q";
import { createBrowserRouter } from "react-router-dom";
import Blog from "./Blog";
import Main from "./Main";
import QuixDeteails from "./QuixDeteails";
import Statistics from "./Statistics";
import Topics from "./Topics";

export const router = createBrowserRouter([
    {
        path: '/',
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
                element: <Statistics></Statistics>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
])