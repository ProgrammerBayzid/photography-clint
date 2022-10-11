import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import SingalTopic from './SingalTopic';

const Topics = () => {
    const quizs = useLoaderData();
    const topicData = quizs.data;
    return (
        <section>
            <div className="bg-gray-100">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-10 md:py-10 md:px-10 lg:px-32 text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-800">
                        Welcome To Quizizz for Fun
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
                        Best Quiz wesite For programmer Hero. The Best Quiz Website for Web devvelopar.
                    </p>

                </div>
                <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                    <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-4 lg:row-gap-8'>

                        {
                            topicData.map(topic =>
                                <SingalTopic
                                    key={topic.id}
                                    topic={topic}


                                ></SingalTopic>)
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Topics
