import React from 'react'
import Gym from '../Gym/Gym';
import Nav from '../Nav/Nav';
import "./Home.css"

const Home = () => {
    return (
        <div className=' Home-Container'>
               <div>
               <div>
                     <Nav></Nav>
                </div>
                 <div>
                     <Gym></Gym>
                 </div>
                 
               </div>


            <div className=''>
                   <h2 className='text-4xl'>info</h2>
            </div>
        </div>
    );
};

export default Home;