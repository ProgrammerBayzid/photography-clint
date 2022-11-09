import React from 'react'
import useTitle from '../../hooks/useTitle'

const Blog = () => {
    useTitle('blog')

    return (
        <div>
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>

                <div data-aos="fade-right" className='mb-10  base-300 text-white p-8 rounded-lg mt-8'>
                    <h2 className='text-2xl font-bold text-black'>01.what is cors?</h2>
                    <p ><span className='text-xl font-bold text-black'>Ans:</span> <span className='text-xl text-black'>CORS </span><span className='text-black'>stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</span></p>
                </div>

                <div data-aos="fade-left" className='mb-10  base-300 text-white p-8 rounded-lg mt-8'>
                    <h2 className='text-2xl font-bold text-black'>01.what is cors?</h2>
                    <p ><span className='text-xl font-bold text-black'>Ans:</span> <span className='text-xl text-black'>CORS </span><span className='text-black'>stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</span></p>
                </div>

                <div data-aos="fade-right" className='mb-10  base-300 text-white p-8 rounded-lg mt-8'>
                    <h2 className='text-2xl font-bold text-black'>01.what is cors?</h2>
                    <p ><span className='text-xl font-bold text-black'>Ans:</span> <span className='text-xl text-black'>CORS </span><span className='text-black'>stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</span></p>
                </div>

                <div data-aos="fade-left" className='mb-10  base-300 text-white p-8 rounded-lg mt-8'>
                    <h2 className='text-2xl font-bold text-black'>01.what is cors?</h2>
                    <p ><span className='text-xl font-bold text-black'>Ans:</span> <span className='text-xl text-black'>CORS </span><span className='text-black'>stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</span></p>
                </div>



            </div>
        </div>
    )
}

export default Blog
