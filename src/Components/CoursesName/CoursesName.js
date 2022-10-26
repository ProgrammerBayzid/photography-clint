import React from 'react'
import { Link } from 'react-router-dom'

const CoursesName = ({ courses }) => {
    const { _id, name } = courses
    return (
        <div className='switeh mb-5 bg-blue-400 hover:bg-blue-600 p-1 rounded-lg'>
            <Link className=' font-bold p-1' to={`/courses/${_id}`}>{name}</Link>
        </div>
    )
}

export default CoursesName
