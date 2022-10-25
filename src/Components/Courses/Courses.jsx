import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CoursesName from '../CoursesName/CoursesName';
import CoursesTopic from '../CoursesTopic/CoursesTopic';

const Courses = () => {
    const allCourses = useLoaderData();
    const { _id } = allCourses
    return (
        <div>
            <div>
                <h1 className='mx-auto text-4xl	 text-center mt-6 mb-4'>
                    All E-Learning Courses
                </h1>
                <h1 className='mx-auto text-2xl text-center mb-6'>
                    Please Choose your topic from our library to get started
                </h1>
            </div>
            <div className=' grid grid-cols-5 gap-24 '>
                <div >
                    <div className='ml-5 mt-10'>
                        <h1 className='text-2xl font-bold text-center mb-4'>Courses Topic</h1>
                        {
                            allCourses.map(c =>
                                <CoursesName

                                    key={c._id}
                                    courses={c}
                                ></CoursesName>)
                        }
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-3'>
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
        </div>
    )
}

export default Courses
