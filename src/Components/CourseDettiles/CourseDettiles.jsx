import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const CourseDettiles = () => {
    const coursesDetail = useLoaderData();
    const { _id, total_view, title, author, details, thumbnail_url, rating, } = coursesDetail;
    return (
        <div>

            <div className='grid justify-items-center mb-5 '>
                <div className="card card-compact  w-96 bg-base-100 shadow-xl border p-2">
                    <div className='flex justify-between'>
                        <div className='flex gap-2 ml-2 mb-1'>
                            <figure><img className='w-4 rounded-full' src={author.img} alt="Courses" /></figure>
                            <p className='mb-0'>{author?.name}</p>
                        </div>
                        <div className='flex gap-1 mr-2'>
                            <FaRegBookmark></FaRegBookmark>
                            <FaShareAlt></FaShareAlt>
                        </div>
                    </div>
                    <figure><img src={thumbnail_url} alt="Courses" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{details}</p>
                        <div className="flex items-center  justify-between  mt-2">
                            <div>
                                <p className='flex gap-1 items-center'><FaStar></FaStar> {rating.number}</p>
                            </div>
                            <div>
                                <p>Price: {rating.price}$</p>
                            </div>
                            <div>

                                <Link to='/premiem'>
                                    <button className="btn btn-primary">Get premium access</button>
                                </Link>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CourseDettiles
