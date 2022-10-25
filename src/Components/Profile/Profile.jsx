import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../Context/Contex'

const Profile = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handelLogOut = () => {
        logOut()
            .then(res => {
                navigate('/')
                toast.success('Successfully Logout')
            })

            .catch(err => { console.log(err); })
    }
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl border p-2">
                <div className="w-24 rounded-full">
                    <span className='ms-2 rounded-full'>{user?.photoURL ?
                        <img src={user.photoURL} />
                        :
                        <p>No Photo</p>
                    }</span>
                </div>
                <div className="card-body">
                    <h2 className="card-title">Name: {user?.displayName ? user.displayName : 'Name Not Available'}</h2>
                    <p>Email: {user?.email}</p>
                    <p>ID: {user?.uid} </p>
                    <p> Email Status: {user?.emailVerified ? <span className=''>Verified</span> : <span className=''>Not Verified</span>} </p>
                    <button onClick={handelLogOut} className="btn btn-primary">Log Out</button>

                </div>
            </div>
        </div>
    )
}

export default Profile
