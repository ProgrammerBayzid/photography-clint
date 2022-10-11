import React from 'react'

const Blog = () => {
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            {/* What is the purpose of React Router */}
            <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg mt-8'>
                <h2 className='text-2xl font-bold text-amber-300'>01. What is the purpose of React Router</h2>
                <p ><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'>R</span>eact Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            {/* How does context api work? */}
            <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg '>
                <h2 className='text-2xl font-bold text-amber-300'>02. How does context api work?</h2>
                <p><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'>T</span>he React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            {/* what is useRef hook in react? */}
            <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg '>
                <h2 className='text-2xl font-bold text-amber-300'>03. what is useRef hook in react?</h2>
                <p><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'>T</span>he useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>

        </div>
    )
}

export default Blog
