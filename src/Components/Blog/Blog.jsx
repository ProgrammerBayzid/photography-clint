import React from 'react'

const Blog = () => {
    return (
        <div>
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>

                <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg mt-8'>
                    <h2 className='text-2xl font-bold text-amber-300'>01.what is cors?</h2>
                    <p ><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'>CORS </span>stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</p>
                </div>

                <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg '>
                    <h2 className='text-2xl font-bold text-amber-300'>02.1. Why are you using firebase? </h2>
                    <p><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'>Firebase</span> helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</p>
                    <h2 className='text-2xl font-bold text-amber-300'>02.2.What other options do you have to implement authentication? </h2>
                    <p><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'>Usually</span>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                </div>

                <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg '>
                    <h2 className='text-2xl font-bold text-amber-300'>03.How does the private route work?</h2>
                    <p><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'>The</span>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                </div>
                <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg '>
                    <h2 className='text-2xl font-bold text-amber-300'>03. What is Node? How does Node work?</h2>
                    <p><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'>In</span>

                        <span>
                            networking a node is either a connection point, a redistribution point, or a communication endpoint. In computer science, nodes are devices or data points on a large network, devices such a PC, phone, or printer are considers nodes.
                        </span>


                        Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.</p>
                </div>

            </div>
        </div>
    )
}

export default Blog
