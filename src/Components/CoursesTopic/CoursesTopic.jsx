import React from 'react'
import { Link } from 'react-router-dom';

const CoursesTopic = ({ courses }) => {
    const { _id, total_view, title, author, details, thumbnail_url, rating } = courses;
    return (

        <div className='mb-5 mt-10'>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                    <figure><img src={thumbnail_url} alt="Courses" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <div className="card-actions justify-end">
                            <Link to={`/courses/${_id}`}>
                                <button className="btn btn-primary">Courses Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CoursesTopic
