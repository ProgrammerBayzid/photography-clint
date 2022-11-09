import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../Context/Context';
import PurchaseService from './PurchaseService';

const Order = () => {
    useTitle('order')

    const { user } = useContext(AuthContext);

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email]);



    const handelDeeted = id => {
        const proced = window.confirm('Are You Sure')
        if (proced) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('deleted successfully');
                        const remaining = orders?.filter(odr => odr._id !== id);
                        setOrders(remaining);
                    }
                })

        }
    };



    return (
        <div>
            <h1 className='px-4 text-center text-2xl sm:text-5xl md:text-3xl lg:text-5xl font-semibold my-10  '> <span className='text-orange-500'>My </span> Orders</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
                {
                    orders.map(odr =>
                        <PurchaseService
                            key={odr._id}
                            oder={odr}
                            handelDeeted={handelDeeted}
                        ></PurchaseService>)
                }
            </div>
        </div>

    )
}

export default Order
