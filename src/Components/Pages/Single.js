import React from 'react'
import { FaStarHalfAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Single = ({ ser }) => {
    const { img, title, description, price, ratting, _id } = ser
    return (
        <div>
            <div className="card  lg:w-80 md:w-60 sm:w-36  bg-base-100 shadow-xl">

                <figure>

                    <img src={img} alt="Shoes" />

                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}

                    </h2>
                    <p>
                        {
                            description.length > 200 ?
                                <>{description.slice(0, 100) + '...'}</>
                                :
                                <span >{description}</span>
                        }
                        <Link to={`/serviceDittels/${_id}`}><div className="badge badge-outline">Read More</div></Link>

                    </p>
                    <div className="card-actions justify-end flex justify-between items-center">
                        <div>
                            Price: {price}$
                        </div>
                        <div className="badge gap-2"><FaStarHalfAlt className='text-warning'></FaStarHalfAlt>  {ratting}</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Single
