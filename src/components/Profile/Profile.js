import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/UserContext'
import './Profile.css'

const Profile = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div>
            <div className='card' >
                <img src="" alt="" srcset="" />
                <h1></h1>
                <p class="title"></p>
                <p>Email: {user?.email}</p>
                <div>
                    <Link to="#"><i class="fa fa-dribbble"></i></Link>

                </div >
                <p><button onClick={logout}>Log out</button></p>
            </div >
        </div >
    )
}

export default Profile
