import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='shadow-lg'>
            <div className="navbar bg-base-300 ">
                <div className="flex-1">

                    <a className="btn btn-ghost normal-case text-xl font-bold">Quiz For Fun</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink to='/'>Topics</NavLink></li>
                        <li><NavLink to='/statistics'>Statistics</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
