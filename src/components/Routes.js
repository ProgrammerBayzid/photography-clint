import { createBrowserRouter } from "react-router-dom";
import Home from './Home';
import Books from './Books';
import ErrorPage from './ErrorPage';
import About from './About';
import Root from './Root';
import BookDetails from './BookDetails';

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/home',
          element: <Home></Home>,
        },
        {
          path: '/books',
          element: <Books></Books>,
          loader:()=>{
            return fetch ('https://api.itbook.store/1.0/new')
          },
        },

        {
            path: '/book/:id',
            element: <BookDetails />,
            loader: ({ params }) =>
              fetch(`https://api.itbook.store/1.0/books/${params.id}`),
              
        },

        {
          path: '/about',
          element: <About></About>,
        }
      ]
    },
  
    
  ])