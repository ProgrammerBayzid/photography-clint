import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../Context/Context'
import Table from './Table';

const MyReview = () => {
    useTitle('my-reviews')

    const { user, logOut } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`https://photograghy-server.vercel.app/reviews?email=${user?.email}`,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)
            }
            )

    }, [user?.email])

    const handelDeeted = id => {
        const proced = window.confirm('Are You Sure')
        if (proced) {
            fetch(`https://photograghy-server.vercel.app/delete/reviews/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('deleted successfully');
                        toast.success('deleted successfully')
                        const remaining = reviews?.filter(odr => odr._id !== id);
                        setReviews(remaining);
                    }
                })

        }
    };



    const handelEdit = (event, id) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const ratting = parseInt(form.ratting.value);
        const feedback = form.feedback.value;
        const email = user?.email || 'Unragister';

        const edit = {
            reviewerName: name,
            ratting,
            feedback,
            email,
        };
        fetch(`https://photograghy-server.vercel.app/patch/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(edit)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Review Update Successfully')
            })



    }

    return (
        <div>
            <h1 className='px-4 text-center text-2xl sm:text-5xl md:text-3xl lg:text-5xl font-semibold my-10  '> <span className='text-orange-500'>My </span> Reviews</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th> services Name</th>
                            <th>Feedback</th>
                            <th>Ratting</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <>
                        {
                            reviews.map(review =>
                                <Table
                                    key={review._id}
                                    review={review}
                                    handelDeeted={handelDeeted}
                                    handelEdit={handelEdit}
                                ></Table>)

                        }
                        {
                            reviews.length === 0 && <h2>No Review Added Please.... <Link to="/services">Add Review</Link></h2>

                        }

                    </>


                </table>
            </div>
        </div>
    )
}

export default MyReview













