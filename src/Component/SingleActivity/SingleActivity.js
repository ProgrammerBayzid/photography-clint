import React from 'react';

const SingleActivity = (props) => {

   const {addToList, gym}=props;

   const {name, img, age, time, id}= gym;
    return (
        <div>
            
            <div className="card  bg-base-100 shadow-xl">
            <figure><img className='h-44' src={img} alt=" Nophoto" /></figure>
            <div className="card-body">
            <h2 className="card-title">
                Name: {name}
             </h2>
            <h4 className='font-bold'>Age: {age} </h4>
             <h4 className='font-bold'>Time: {time} sec </h4>
             <button onClick={()=>addToList(gym)} className="btn btn-active btn-primary ">Add to list</button>
            </div>
            </div>
        </div>
    );
};

export default SingleActivity;