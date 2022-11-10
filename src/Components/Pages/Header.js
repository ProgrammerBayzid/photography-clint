import React from 'react'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/Context';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()

    const handelLogOut = () => {
        logOut()
            .then(res => {
                navigate('/')
                toast.success('Successfully Logout')
            })

            .catch(err => { console.log(err); })
    }

    const menuItems = <>
        <li className='font-semibold'><Link to='/home'>Home</Link></li>
        <li className='font-semibold'><Link to='/services'>Services</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>


        {
            user?.uid ?
                <>
                    <li className='font-semibold'><Link to='/addServices'>Add Services</Link></li>
                    <li className='font-semibold'><Link to='/myReview'>My Review</Link></li>
                    <li className='font-semibold'><Link to='/order'>Order</Link></li>



                </>
                :
                <>

                </>
        }

    </>
    return (
        <div className="navbar h-20 mb-12 py-12 bg-base-100 sticky top-0 z-40 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className='flex gap-3 items-center'>
                    <Link to='/' className="mt-5 normal-case text-xl">
                        <img className='w-16 rounded-full' src="https://i.ibb.co/c2nT5YP/logo-png.jpg" alt="logo-png" border="0" />
                    </Link>
                    <h1 className='text-xl font-bold mt-3'>Photo-Henter</h1>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div>
                    {
                        user?.uid ? <ul className='flex gap-5 items-center '>
                            <div className="dropdown dropdown-end tooltip tooltip-bottom" data-tip={user?.displayName ? user?.displayName : 'Name Not Available'}>
                                <li className='font-semibold'> <Link to='/profile'>

                                    <div className="w-10 rounded-full">
                                        <span className='ms-2'>{user?.photoURL ?
                                            <img className='rounded-full' src={user.photoURL} />

                                            :
                                            <p>No Photo</p>
                                        }</span>

                                    </div>

                                </Link></li>

                            </div>

                            <li>
                                <button className='font-semibold' onClick={handelLogOut} >Log-Out</button>

                            </li>
                        </ul>
                            :


                            <ul className='flex gap-5'>
                                <li className='font-semibold'><Link to='/login'>Login</Link></li>
                                <li className='font-semibold'><Link to='/register'>Register</Link></li>
                            </ul>

                    }
                </div>

            </div>
        </div>
    )
}

export default Header
