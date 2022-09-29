import React from 'react';

const Cart = (props) => {
    const {cart}= props;
    return (
        <div>
            <div >
                
                <div>
                <div className='flex items-center gap-4	m-20 '>
                 <img className='w-20 rounded-full' src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/277572443_1325731787940448_6051411949920103477_n.jpg?stp=dst-jpg_p843x403&_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=250n8Zhh9AgAX8CtvBq&_nc_ht=scontent.fdac22-1.fna&oh=00_AT_qYXY2EvH9f3rDtD-riAHpnJ1mDZrL_7RuHDpptYInpw&oe=633B1411" alt="" srcset="" />

                 <h2 className='font-bold text-3xl'>Killer Bayzid <p className='text-sm'>Country: Bangladesh </p></h2>
                </div>

                
         <div className='flex gap-10 ml-20 mr-40 p-7  rounded-3xl bg-red-300'>
              <div>
              <h2 className='font-bold text-3xl'>55<span className='text-sm'>kg</span> <p className='text-sm'>Weight </p></h2>
              </div>
              <div>
              <h2 className='font-bold text-3xl'>5.6<p className='text-sm'>Height </p></h2>
              </div>
              <div>
              <h2 className='font-bold text-3xl'>21<span className='text-sm'>yrs</span> <p className='text-sm'>Age </p></h2>
              </div>
                </div>
         </div>


         <div className='mt-10 flex gap-20 bg-zinc-400 ml-20 mr-40 p-5 rounded-3xl'>
            <h1 className=''>Select Exerise</h1>
            <h1>{cart.length}</h1>
         </div>

         <div className='mt-10'>
            <h1 className='ml-20 font-bold text-2xl mb-4'>Add A Break</h1>
            <div className='flex gap-10 ml-20 mr-40 p-7  rounded-3xl bg-red-300'>
                
            </div>
              
        </div>

         <div className=''>
         <h1 className='ml-20 font-bold text-2xl mt-6 mb-1'>Exerise Details</h1>
            <div className='flex gap-20 mt-10 bg-zinc-400 ml-20 mr-40 p-5 rounded-3xl'>
            <h1 className=''>Exercise Time</h1>
            <h1>{cart.time} seconds</h1>
            </div>
         </div>
         <div className='mt-10 flex gap-20 bg-zinc-400 ml-20 mr-40 p-5 rounded-3xl'>
            <h1 className=''>Break Time</h1>
            <h1>{} seconds</h1>
         </div>
        


           <div className='ml-32 mt-10'>
           <button className="btn btn-active btn-primary">Activity Completed</button>

           </div>
               
         </div>
        </div>
    );
};

export default Cart;