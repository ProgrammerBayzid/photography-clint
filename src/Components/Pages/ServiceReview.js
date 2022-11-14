import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useLoaderData } from 'react-router-dom'

const ServiceReview = () => {
    const serviceReview = useLoaderData();
    console.log(serviceReview);
    // const { userImg, _id, serviceTitle, reviewerName, feedback, ratting, email, service } = serviceReview;

    return (
        <div>
            <h1>{serviceReview.serviceTitle}</h1>

        </div>
    )

}

export default ServiceReview
