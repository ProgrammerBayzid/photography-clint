import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../Context/Context';
import PurchaseService from './PurchaseService';

const Order = () => {
    useTitle('order')

    const { user, logOut } = useContext(AuthContext);

    const [orders, setOrders] = useState([]);
    console.log(orders);

    useEffect(() => {
        fetch(`https://photograghy-server.vercel.app/orders?email=${user?.email}`,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                setOrders(data)
            }
            )
    }, [user?.email]);



    const handelDeeted = id => {
        const proced = window.confirm('Are You Sure')
        if (proced) {
            fetch(`https://photograghy-server.vercel.app/orders/${id}`, {
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
                {
                    orders.length === 0 && <h2>No Items Add. Please......<Link to="/services">Add Services</Link></h2>
                }
            </div>
        </div>

    )
}

export default Order









