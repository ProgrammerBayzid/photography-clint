import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AuthContext } from '../../Context/Contex';

const Header = () => {

    const { user } = useContext(AuthContext)





    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <div className='flex'>
                        <div><img className='w-24' src="https://i.ibb.co/6F28ZQK/Minimalist-Initial-Letter-Logo-removebg-preview.png" alt="" srcset="" /></div>
                        <div><Link to='/home' className="btn btn-ghost normal-case text-xl mt-5"><h1>E-Learning</h1></Link></div>
                    </div>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>

                    </ul>
                </div>
                <div>
                    {user?.uid ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <span className='ms-2'>{user?.photoURL ?
                                    <img src={user.photoURL} />

                                    :
                                    <p>No Photo</p>
                                }</span>

                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='/profile' className="justify-between">
                                    Profile
                                </Link>
                            </li>

                        </ul>
                    </div>
                        :

                        <div>
                            <ul className='className="menu menu-horizontal p-0 flex gap-4'>
                                <li><Link to='/login'>Log-In</Link></li>
                                <li><Link to='/register'>Register</Link></li>
                            </ul>
                        </div>

                    }
                </div>


            </div>
        </div>
    )
}

export default Header
