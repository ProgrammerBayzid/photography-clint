import React from 'react'
import { Link } from 'react-router-dom'

const CoursesName = ({ courses }) => {
    const { _id, name } = courses
    return (
        <div>
            <Link to={`/courses/${_id}`}>{name}</Link>
        </div>
    )
}

export default CoursesName
