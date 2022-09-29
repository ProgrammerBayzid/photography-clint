import React, { useState } from 'react'
import Cart from '../Cart/Cart';
import Gym from '../Gym/Gym';
import Nav from '../Nav/Nav';
import "./Home.css"

const Home = () => {

    const [cart, setCart]= useState([]);
    const addToList =(gym)=>{
        console.log(gym);
        const newCart=[...cart, gym];
        setCart(newCart);
    }


    return (
        <div className=' Home-Container'>
               <div>
               <div>
                     <Nav></Nav>
                </div>
                 <div>
                     <Gym 
                     addToList={addToList}
                     
                     ></Gym>
                 </div>

               </div>


            <div className='bg-slate-200'>
                <Cart
                cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;