import React, { useState } from 'react'
import Cart from '../Cart/Cart';
import Gym from '../Gym/Gym';
import Nav from '../Nav/Nav';
import "./Home.css"

const Home = () => {

    const [cart, setCart]= useState([]);

    const addToList =(gym)=>{
      
        const newCart=[...cart, gym];
        setCart(newCart);
    }


    return (
        <div className=' grid grid-cols-6'>
               <div className='col-span-4'>
                    <div>
                        <Nav></Nav>
                    </div>
                     <div>
                          <Gym 
                          addToList={addToList}
                     
                           ></Gym>
                     </div>
                </div>


           <div className='bg-slate-100 '>
                    <Cart
                       cart={cart} setCart={setCart}
                     ></Cart>
               
           </div>
        </div>
    );
};

export default Home;