import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/Context'
import Table from './Table';

const MyReview = () => {

    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email])

    const handelDeeted = id => {
        const proced = window.confirm('Are You Sure')
        if (proced) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('deleted successfully');
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
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(edit)
        }).then(res => res.json())
            .then(data => {

            })



    }

    return (
        <div>
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

                    </>


                </table>
            </div>
        </div>
    )
}

export default MyReview
