import React from 'react'
import { useContext } from 'react'
import useTitle from '../../hooks/useTitle'
import { AuthContext } from '../Context/Context'

const Profile = () => {
    useTitle('profile')

    const { logOut, user } = useContext(AuthContext)
    return (

        <body className='bg-gray-300'>
            <div className='bg-white rounded-lg p-10 '>
                <img className='mx-auto rounded-full md:h-24 md:w-24' src={user?.photoURL} alt="" srcset="" />
                <div className='text-center text-black'>
                    <h2 className='text-lg'><span className='font-semibold'>Name: </span>{user?.displayName}</h2>
                    <p className='text-black'>
                        <span className='font-semibold'>Email:</span> {user?.email}
                    </p>
                    <p className='text-black'>
                        <span className='font-semibold'>ID:</span> {user?.uid}
                    </p>
                    <p className='text-black'>
                        <span className='font-semibold'>Email Status:</span> {user?.emailVerified ? <span className=''>Verified</span> : <span className=''>Not Verified</span>}
                    </p>
                </div>
            </div>
        </body>

    )
}

export default Profile
