import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Banner from './Banner'
import { FaBeer, FaStarHalfAlt } from 'react-icons/fa';
import About from './About';
import PhotoGleary from './PhotoGleary';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Single from './Single';
import useTitle from '../../hooks/useTitle';



const Home = () => {
    useTitle('home')

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://photograghy-server.vercel.app/services/home')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <Banner></Banner>
            <div>

                <div data-aos="zoom-out">
                    <h1 className='px-4 text-center text-2xl sm:text-5xl md:text-3xl lg:text-5xl font-semibold my-10  '> <span className='text-orange-500'>My </span> Services</h1>

                </div>
                <div className='grid lg:ml-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
                    {
                        services.map(ser =>
                            <Single
                                key={ser._id}
                                ser={ser}
                            ></Single>)
                    }


                </div>
                <div data-aos="flip-up" className='text-center'>
                    <Link to='/services'><button className="btn btn-active btn-secondary mt-10 ">View All Services</button></Link>
                </div>

            </div>
            <hr className='mt-10 text-black font-semibold' />
            <About></About>
            <PhotoGleary></PhotoGleary>

        </div>
    )
}

export default Home










