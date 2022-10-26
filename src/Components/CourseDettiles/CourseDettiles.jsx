import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

// import Pdf from "react-to-pdf";

// const ref = React.createRef();

const CourseDettiles = () => {
    const coursesDetail = useLoaderData();
    const { _id, category_id, total_view, title, author, details, thumbnail_url, rating, } = coursesDetail;



    return (
        <div>
            {/* <div className="">
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
                <div ref={ref}>
                    <h1>Hello CodeSandbox</h1>
                    <h2>Start editing to see some magic happen!</h2>
                </div>
            </div> */}



            <div className='grid  justify-items-center mb-10 mt-10'>
                <div className="card card-compact  lg:w-96 md:w-80 sm-64 bg-base-100 shadow-xl border p-2">
                    <div className='flex justify-between'>
                        <div className='flex gap-2 ml-2 mb-1 '>
                            <figure><img className='w-4 rounded-full' src={author.img} alt="Courses" /></figure>
                            <p className='mb-0  text-white'>{author?.name}</p>
                        </div>
                        <div className='flex gap-1 mr-2  text-white'>
                            <FaRegBookmark></FaRegBookmark>
                            <FaShareAlt></FaShareAlt>
                        </div>
                    </div>
                    <figure><img src={thumbnail_url} alt="Courses" /></figure>
                    <div className="card-body">
                        <h2 className="card-title  text-white">{title}</h2>
                        <p className=' text-white'>{details}</p>
                        <div className="flex items-center  justify-between  mt-2">
                            <div>
                                <p className='flex gap-1 items-center  text-white'><FaStar></FaStar> {rating.number}</p>
                            </div>
                            <div>
                                <p className=' text-white'>Price: {rating.price}$</p>
                            </div>
                            <div>

                                <Link to={`/courses/det/${category_id}`}>
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
