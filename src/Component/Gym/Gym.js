import React from 'react';
import { useEffect, useState} from 'react';
import SingleActivity from '../SingleActivity/SingleActivity';
const Gym = (props) => {
    const {addToList} = props;

     const [gyms , setGtms]= useState([]);
     
     useEffect(()=>{
        fetch('/data.json')
         .then(res => res.json())
         .then(data => setGtms(data))
     },[]);

    


    return (
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
           {
              gyms.map(gym => 
              <SingleActivity
               
              key={ gym.id}
              gym={gym}
              addToList={addToList}
              
              
              ></SingleActivity>)
           }
        </div>
    );
};

export default Gym;