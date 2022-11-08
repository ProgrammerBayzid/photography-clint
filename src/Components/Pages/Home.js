import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Banner from './Banner'
import { FaBeer, FaStarHalfAlt } from 'react-icons/fa';
import About from './About';
import PhotoGleary from './PhotoGleary';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Single from './Single';



const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <Banner></Banner>
            <div>

                <h1 className='px-4 text-center text-2xl sm:text-5xl md:text-3xl lg:text-5xl font-semibold my-10  '> <span className='text-orange-500'>My </span> Services</h1>
                <div className='grid ml-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
                    {
                        services.map(ser =>
                            <Single
                                key={ser._id}
                                ser={ser}
                            ></Single>)
                    }


                </div>
                <div className='text-center'>
                    <Link to='/services'><button className="btn btn-active btn-secondary mt-10 ">View All Services</button></Link>
                </div>

            </div>
            <hr className='mt-10' />
            <About></About>
            <PhotoGleary></PhotoGleary>

        </div>
    )
}

export default Home










// {
//     return (
//         <div>
//             <div className="card  lg:w-80 md:w-60 sm:w-36  bg-base-100 shadow-xl">
//                 <figure><img src={ser.img} alt="Shoes" /></figure>
//                 <div className="card-body">
//                     <h2 className="card-title">
//                         {ser.title}

//                     </h2>
//                     <p>

//                         {
//                             ser.description.length > 200 ?
//                                 <>{ser.description.slice(0, 100) + '...'}</>
//                                 :
//                                 <span >{ser.description}</span>
//                         }
//                         <Link to=''><div className="badge badge-outline">Read More</div></Link>

//                     </p>
//                     <div className="card-actions justify-end flex justify-between items-center">
//                         <div>
//                             Price: {ser.price}$
//                         </div>
//                         <div className="badge gap-2"><FaStarHalfAlt className='text-warning'></FaStarHalfAlt>  {ser.ratting}</div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }