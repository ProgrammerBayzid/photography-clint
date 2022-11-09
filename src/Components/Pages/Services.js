import React, { useEffect, useState } from 'react'
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Services = () => {
    useTitle('services')

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='px-4 text-center text-2xl sm:text-5xl md:text-3xl lg:text-5xl font-semibold my-10  '> <span className='text-orange-500'>My </span> Services</h1>
            <div className='grid ml-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1' data-aos="fade-up">
                {
                    services.map(ser => {
                        return (
                            <div data-aos="zoom-out-down">
                                <div className="card  lg:w-80 md:w-60 sm:w-36  bg-base-100 shadow-xl">
                                    <figure><img src={ser.img} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {ser.title}

                                        </h2>
                                        <p>

                                            {
                                                ser.description.length > 200 ?
                                                    <>{ser.description.slice(0, 100) + '...'}</>
                                                    :
                                                    <span >{ser.description}</span>
                                            }
                                            <Link to={`/serviceDittels/${ser._id}`}><div className="badge badge-outline">Read More</div></Link>

                                        </p>
                                        <div className="card-actions justify-end flex justify-between items-center">
                                            <div>
                                                Price: {ser.price}$
                                            </div>
                                            <div className="badge gap-2"><FaStarHalfAlt className='text-warning'></FaStarHalfAlt>  {ser.ratting}</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>


        </div>
    )
}

export default Services
