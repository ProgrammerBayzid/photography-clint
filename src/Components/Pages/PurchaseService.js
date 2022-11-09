import React, { createContext } from 'react'
import { AuthContext } from '../Context/Context';

const PurchaseService = ({ oder, handelDeeted }) => {
    const { user } = createContext(AuthContext);

    const {
        service,
        _id,
        title,
        img,
        userName,
        number,
        address,
        email,
        userImg,
        price } = oder;


    return (
        <div >
            <div className="card w-80 bg-base-100 shadow-xl image-full">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{price}$</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handelDeeted(_id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PurchaseService
