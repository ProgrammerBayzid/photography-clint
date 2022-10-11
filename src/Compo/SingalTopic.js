import React from 'react'
import { Link } from 'react-router-dom';

const SingalTopic = ({ topic }) => {
    const { id, name, logo } = topic;
    return (

        <div className='bg-gray-100 p-2 rounded shadow-lg'>
            <img
                className='object-cover w-50 h-50 mb-6 rounded shadow-lg md:h-56 xl:h-60'
                src={logo}
                alt=''
            />
            <div className='flex justify-between'>
                <p className='mb-2 text-xl leading-none sm:text-2xl'><small>{name}</small></p>

                <div className="flex flex-wrap justify-center">
                    <Link to={`/quiz/${id}`}>
                        <button
                            type="button"
                            className="px-4 py-1 m-2 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-400 bg-cyan-200"
                        >
                            Start Practice
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SingalTopic
