import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CoursesName from '../CoursesName/CoursesName';
import CoursesTopic from '../CoursesTopic/CoursesTopic';
import Lottie from 'lottie-react'
import elearn from '../../assets/elearn.json'

const Courses = () => {
    const allCourses = useLoaderData();
    const { _id } = allCourses
    return (
        <div>
            <div>
                <h1 className='switeh mx-auto text-4xl	 text-center mt-6 mb-4'>
                    All E-Learning Courses
                </h1>
                <h1 className='switeh mx-auto text-2xl text-center mb-6'>
                    Please Choose your topic from our library to get started
                </h1>
            </div>
            <div className=' grid lg:grid-cols-5 gap-24 '>
                <div >
                    <div className='ml-5 mt-10 border p-2 pb-4 cra'>
                        <h1 className='switeh text-2xl bg-blue-400 p-1 rounded-lg font-bold text-center mb-4'>Courses Topic</h1>
                        {
                            allCourses.map(courses =>
                                <CoursesName

                                    key={courses._id}
                                    courses={courses}
                                ></CoursesName>)
                        }
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className='grid lg:grid-cols-3  md:grid-cols-3  '>
                        {
                            allCourses.map(courses =>
                                <CoursesTopic
                                    key={courses._id}
                                    courses={courses}
                                ></CoursesTopic>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24 '>
                <div className='flex flex-col items-center justify-between lg:flex-row'>
                    <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                        <div className=' max-w-xl mb-6 lg:mt-8'>
                            <h2 className='switeh max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                                We have everything you need  <br className='hidden md:block' /> to learn anything{' '}
                                <span className='inline-block text-blue-400'>Best E-Learning  Platform</span>
                            </h2>
                            <p className='switeh text-base text-gray-700 md:text-lg'>
                                Skiles are a uniquely portable magic. Skiles serve to show a man
                                that those original thoughts of his aren’t very new after all.
                            </p>
                        </div>
                    </div>

                    <div className='relative lg:w-1/2 '>
                        <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
                            <Lottie animationData={elearn} loop={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses
