import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Cart = (props) => {
    const notify = () => toast("Activity Completed.");
    const [breakTime, setBreakTime] = useState(0);
    const {cart}= props;
    let total =0;
    
    for(const gym of cart){
        total = total + gym.time;
    }

    const handleAddToList = (e) => {
        const val = e.currentTarget.value;
        setBreakTime(val);
    }

    return (
      
    <div>
{/* img      */}
        
                <div className='flex items-center  gap-3 mt-10 ml-10 '>
                 <img className='w-20 rounded-full' src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/277572443_1325731787940448_6051411949920103477_n.jpg?stp=dst-jpg_p843x403&_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=250n8Zhh9AgAX8CtvBq&_nc_ht=scontent.fdac22-1.fna&oh=00_AT_qYXY2EvH9f3rDtD-riAHpnJ1mDZrL_7RuHDpptYInpw&oe=633B1411" alt="" srcset="" />

                 <h2 className='font-bold text-3xl'>Killer Bayzid <p className='text-sm'>Country: Bangladesh </p></h2>
                </div>
        

{/* img      */}

{/* details  */}
                
         <div className='flex gap-10 ml-20 mr-0 p-7  rounded-3xl bg-red-300'>
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
   {/* details  */}     

{/* select  */}
         <div className='mt-10 flex gap-20 bg-zinc-400 ml-20 mr-40 p-5 rounded-3xl'>
            <h1 className=''>Select Exerise</h1>
            <h1>{cart.length}</h1>
         </div>
{/* select  */}

{/* btn  */}

         <div className='mt-10'>
            <h1 className='ml-20 font-bold text-2xl mb-4'>Add A Break</h1>

            <div className='flex gap-10 ml-20 mr-40 p-7  rounded-3xl bg-red-300'>

            <button onClick={handleAddToList} value= '10' className="btn btn-accent rounded-full w-2 h-1">10</button>
            <button onClick={handleAddToList} value= '20' className="btn btn-accent rounded-full w-2 h-1">20</button>
            <button onClick={handleAddToList} value= '30' className="btn btn-accent rounded-full w-2 h-1">30</button>
            <button onClick={handleAddToList} value= '40' className="btn btn-accent rounded-full w-2 h-1">40</button>
            <button onClick={handleAddToList} value= '50' className="btn btn-accent rounded-full w-2 h-1">50</button>
                
            </div> 
        </div>
{/* btn  */}


{/* exercise time  */}

         <div className=''>
         <h1 className='ml-20 font-bold text-2xl mt-6 mb-1'>Exerise Details</h1>
            <div className='flex gap-10 justify-between mt-10 bg-zinc-400 ml-20 mr-40 p-5 rounded-3xl'>
            <h1 className=''>Exercise Time</h1>
            <div className='flex gap-1'>
            <h1>{total} </h1>
             <p>seconds</p>
            </div>
            </div>
         </div>
{/* exercise time  */}
 

 {/* brack time  */}
         <div className='mt-10 flex gap-10 justify-between bg-zinc-400 ml-20 mr-40 p-5 rounded-3xl'>
            <h1 className=''>Break Time</h1>
            <div className='flex gap-1'>
            <h1>{breakTime} </h1>
             <p>seconds</p>
            </div>
         </div>
  {/* brack time  */}

    {/* btn  */}
           <div className='ml-32 mt-10'>
           <button onClick={ () => {notify(); setBreakTime(0); props.setCart([])} } className="btn btn-active btn-primary">Activity Completed</button>
           <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
           </div>
 {/* btn  */}

         </div>
    
    );
};

export default Cart;