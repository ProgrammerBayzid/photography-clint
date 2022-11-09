import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Components/Routes/Router';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='max-w-screen-xl mx-auto'>

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}


export default App;
