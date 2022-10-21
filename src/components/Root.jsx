import React, {createContext, useState} from 'react'
import { Outlet, useLoaderData } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export  const ProductConText = createContext([]);
export  const CartConText = createContext([]);
const Root = () => {

    const {products, initiaCart} = useLoaderData();
    const [cart, setCart] = useState(initiaCart)

  return (

    <ProductConText.Provider value={products}>

        <CartConText.Provider value={[cart, setCart ]}>
            <div>
                 <Header></Header>
                 <Outlet></Outlet>
                 <Footer></Footer>
           </div>
        </CartConText.Provider>
           
    </ProductConText.Provider>
   
  )
}

export default Root
