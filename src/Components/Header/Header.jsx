import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { AuthContext } from '../../Context/Contex';
import ReactSwitch from "react-switch";
import { ThemContext } from '../../App';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
} from 'react-icons/fa';

const Header = () => {

    const { user } = useContext(AuthContext)
    const { theme, themToggel } = useContext(ThemContext)

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };



    return (
        <div>
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white overlayer'>
                <div className='flex'>
                    <div><img className='w-24' src="https://i.ibb.co/6F28ZQK/Minimalist-Initial-Letter-Logo-removebg-preview.png" alt="" srcset="" /></div>
                    <div><Link to='/home' className="btn btn-ghost normal-case text-xl mt-5 switeh"><h1 >E-Learning</h1></Link></div>
                </div>


                <div className='flex '>
                    <ul className='hidden md:flex switeh gap-4 items-center'>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li className='mr-2 '>

                            <div className='switeh flex w-100% gap-2'>
                                <label>{theme === 'light' ? "Light Mood" : "Dark Mood"}</label>
                                <ReactSwitch onChange={themToggel} checked={theme === "light"}></ReactSwitch>
                            </div>
                        </li>
                        <li>
                            <div className="tooltip tooltip-bottom" data-tip={user?.displayName ? user.displayName : 'Name Not Available'}>
                                {user?.uid ? <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div>
                                            <div className="w-10 rounded-full">
                                                <span className='ms-2'>{user?.photoURL ?
                                                    <img src={user.photoURL} />

                                                    :
                                                    <p>No Photo</p>
                                                }</span>

                                            </div>
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link to='/profile' className="justify-between switeh bg-secondary font-bold">
                                                Profile
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                    :

                                    <div >
                                        <ul className='className="menu menu-horizontal p-0 flex gap-4'>
                                            <li><Link to='/login'>Log-In</Link></li>
                                            <li><Link to='/register'>Register</Link></li>
                                        </ul>
                                    </div>

                                }
                            </div>
                        </li>
                    </ul>

                </div>

                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu className='switeh' size={20} />}
                </div>
                <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'><Link to='/'>E-Larning</Link></h1>
                    <li className='p-4 border-b border-gray-600'><Link to='/home'>Home</Link></li>
                    <li className='p-4 border-b border-gray-600'><Link to='/courses'>Courses</Link></li>
                    <li className='p-4 border-b border-gray-600'><Link to='/faq'>FAQ</Link></li>
                    <li className='p-4 border-b border-gray-600'><Link to='/blog'>Blog</Link></li>
                    <li>
                        <div className='switeh flex w-100% gap-2'>
                            <label>{theme === 'light' ? "Light Mood" : "Dark Mood"}</label>
                            <ReactSwitch onChange={themToggel} checked={theme === "light"}></ReactSwitch>
                        </div>
                    </li>
                    <li className='p-4 border-b border-gray-600 tooltip tooltip-bottom' data-tip={user?.displayName ? user.displayName : 'Name Not Available'}>

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
                                    <Link to='/profile' className="justify-between bg-secondary font-bold">
                                        Profile
                                    </Link>
                                </li>
                            </ul>
                        </div>
                            :

                            <div >
                                <ul className='className="menu menu-horizontal p-0 flex gap-4'>
                                    <li><Link to='/login'>Log-In</Link></li>
                                    <li><Link to='/register'>Register</Link></li>
                                </ul>
                            </div>
                        }
                    </li>
                </ul>


            </div>





        </div>
    )
}

export default Header
