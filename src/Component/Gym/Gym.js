import React from 'react';
import { useEffect, useState} from 'react';
const Gym = () => {

     const [gym , setGtm]= useState([]);

     useEffect(()=>{
        fetch('data.json')
         .then(res => res.json())
         .then(data => setGtm(data))
     },[])


    return (
        <div>
            <h1>gym {gym.length}</h1>
        </div>
    );
};

export default Gym;