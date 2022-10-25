import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className='max-w-[1640px] mx-auto p-4'>
                <div className='max-h-[500px] relative'>
                    {/* Overlay */}
                    <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>E-Larning</span> Platform</h1>
                    </div>
                    <img className='w-full max-h-[500px] object-cover' src="https://homeschoolacademy.com/wp-content/uploads/2020/08/LiveOnlineClass.jpg" alt="/" />
                </div>
            </div>

            <div>
                <h1 className='mx-auto text-4xl	 text-center mt-6 mb-4'>
                    We have everything you need to learn anything
                </h1>
                <h1 className='mx-auto text-2xl text-center mb-6'>
                    Choose your topic from our vast library to get started
                </h1>
                <div className=' text-center'>
                    <Link to='/courses'> <button className="btn btn-warning	">View All Coures</button></Link>

                </div>

            </div>
        </div>
    )
}

export default Home
