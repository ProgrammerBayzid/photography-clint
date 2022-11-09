import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../Context/Context';
import Feedback from './Feedback';

const ServiceDittels = () => {
    useTitle('servicer-details')

    const service = useLoaderData();
    const { user } = useContext(AuthContext)
    const email = user?.email;
    const { img, title, description, price, ratting, _id } = service;

    const [feedbacks, setFeedbacks] = useState([])
    // services feedback

    useEffect(() => {
        fetch('https://photograghy-server.vercel.app/allreviews')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, []);

    const placeOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const number = parseInt(form.number.value);
        const address = form.address.value;
        const email = user?.email || 'Unragister';


        const order = {
            service: _id,
            title: title,
            img: img,
            userName: name,
            number,
            address,
            email,
            price,
            userImg: user?.photoURL
        };
        fetch('https://photograghy-server.vercel.app/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Place Order Successfully')
                    form.reset()
                }
            })
            .catch(err => console.log(err));


    };


    const placeReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const ratting = parseInt(form.ratting.value);
        const feedback = form.feedback.value;
        const email = user?.email || 'Unragister';

        const review = {
            service: _id,
            serviceTitle: title,
            serviceImg: img,
            reviewerName: name,
            ratting,
            feedback,
            email,
            userImg: user.photoURL,
        };

        fetch('https://photograghy-server.vercel.app/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review Add Successfully')
                    form.reset()

                }
            })
            .catch(err => console.log(err));
    }

    return (

        <div>


            <div>
                <h1 className='px-4 text-center text-2xl sm:text-5xl md:text-3xl lg:text-5xl font-semibold my-10  '> <span className='text-orange-500'>Services </span> Details <br /> <span className='text-2xl'>And </span>
                    <br /> <span className='text-2xl'>FeedBack </span></h1>
                <div data-aos="flip-down" className="card grid lg:grid-cols-2 bg-base-100 shadow-xl">
                    <figure><img className='w-96' src={img} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p className='w-90'>{description}</p>
                        <div className="card-actions justify-end">

                            <label htmlFor="my-modal-3" className="btn btn-primary">Place Order</label>
                        </div>
                        <div className="card-actions justify-end flex justify-between items-center">
                            <div>
                                Price: {price}$
                            </div>
                            <div className="badge gap-2"><FaStarHalfAlt className='text-warning'></FaStarHalfAlt>  {ratting}</div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>

            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={placeOrder}>
                        <div>
                            <div className='grid lg:grid-cols-2  grid-cols-1 gap-5 mt-5 '>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered input-sm w-full " required />
                                <input type="text" name='number' placeholder="number" className="input input-bordered input-sm w-full " required />
                                <textarea required className="textarea textarea-primary"
                                    name='address'
                                    placeholder="Type your address">

                                </textarea>
                                <input type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered input-sm w-full " readOnly />
                                <button className="btn btn-active btn-secondary " type='submit'>Confirm Order</button>
                            </div>
                            <div className='text-center mt-5'>

                            </div>
                        </div>
                    </form>
                </div>
            </div>



            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>

                <div>
                    <h1 data-aos="zoom-in-down" className='px-4 text-center text-2xl sm:text-5xl md:text-3xl lg:text-5xl font-semibold my-10  '> <span className='text-orange-500'>Service </span> Feedback <br />
                    </h1>
                    <thead>
                        <tr>

                            <th> services Name</th>
                            <th>Feedback</th>
                            <th>Ratting</th>

                        </tr>
                    </thead>


                    <>
                        {
                            feedbacks.map(fdb =>
                                <Feedback
                                    key={fdb._id}
                                    fdb={fdb}
                                ></Feedback>)
                        }

                    </>
                </div>

                <div>
                    <h1 data-aos="zoom-in-down" className='px-4 text-center text-2xl sm:text-5xl md:text-3xl lg:text-5xl font-semibold my-10  '> <span className='text-orange-500'>Add </span> Feedback <br />
                    </h1>

                    <form data-aos="zoom-in-down" onSubmit={placeReview}>
                        <div>
                            <div className='grid lg:ml-20 lg:grid-cols-2  grid-cols-1 gap-5 mt-5 '>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered input-sm w-full " required />
                                <input type="text" name='ratting' placeholder="ratting" className="input input-bordered input-sm w-full " required />
                                <textarea required className="textarea textarea-primary"
                                    name='feedback'
                                    placeholder="Type your feedback">

                                </textarea>
                                <input type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered input-sm w-full " readOnly />
                                <button className="btn btn-active btn-secondary " type='submit'>Place Review</button>
                            </div>
                            <div className='text-center mt-5'>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ServiceDittels
