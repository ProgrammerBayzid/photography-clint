import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Components/Routes/Router';



function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className='max-w-screen-xl mx-auto'>

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}


export default App;
