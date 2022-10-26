import React from 'react'
import { Link } from 'react-router-dom'

const CoursesName = ({ courses }) => {
    const { _id, name } = courses
    return (
        <div className='switeh mb-5'>
            <Link className='border p-1' to={`/courses/${_id}`}>{name}</Link>
        </div>
    )
}

export default CoursesName
