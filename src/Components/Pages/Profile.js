import React from 'react'
import { useContext } from 'react'
import useTitle from '../../hooks/useTitle'
import { AuthContext } from '../Context/Context'

const Profile = () => {
    useTitle('profile')

    const { logOut, user } = useContext(AuthContext)
    return (
        <div>
            <h1>name:{user?.displayName}</h1>
        </div>
    )
}

export default Profile
