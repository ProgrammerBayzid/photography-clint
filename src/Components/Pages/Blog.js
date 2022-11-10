import React from 'react'
import useTitle from '../../hooks/useTitle'

const Blog = () => {
    useTitle('blog')

    return (
        <div>
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>

                <div data-aos="fade-right" className='mb-10  base-300 text-white p-8 rounded-lg mt-8'>
                    <h2 className='text-2xl font-bold text-black'>01.Difference between SQL and NoSQL?</h2>
                    <p ><span className='text-xl font-bold text-black'>Ans:</span> <span className='text-black'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</span></p>
                </div>

                <div data-aos="fade-left" className='mb-10  base-300 text-white p-8 rounded-lg mt-8'>
                    <h2 className='text-2xl font-bold text-black'>01.What is JWT, and how does it work?</h2>
                    <p ><span className='text-xl font-bold text-black'>Ans:</span><span className='text-black'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</span></p>
                </div>

                <div data-aos="fade-right" className='mb-10  base-300 text-white p-8 rounded-lg mt-8'>
                    <h2 className='text-2xl font-bold text-black'>01.What is the difference between javascript and NodeJS?</h2>
                    <p ><span className='text-xl font-bold text-black'>Ans:</span> <span className='text-black'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</span></p>
                </div>

                <div data-aos="fade-left" className='mb-10  base-300 text-white p-8 rounded-lg mt-8'>
                    <h2 className='text-2xl font-bold text-black'>01.How does NodeJS handle multiple requests at the same time?</h2>
                    <p ><span className='text-xl font-bold text-black'>Ans:</span> <span className='text-black'> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</span></p>
                </div>



            </div>
        </div>
    )
}

export default Blog
