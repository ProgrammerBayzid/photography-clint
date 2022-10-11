import logo from './logo.svg';

import { RouterProvider } from 'react-router-dom';
import { router } from './Compo/Root';


function App() {

   return (
      <div>
         <RouterProvider router={router}></RouterProvider>
      </div>
   );
}


export default App;
