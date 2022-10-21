import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Context/Context'
import Spiner from './Spiner'

const PrivetRout = ({ children }) => {
    const { user, lodar } = useContext(AuthContext)
    const location = useLocation()
    if (lodar) {
        return <Spiner></Spiner>
    }
    if (user && user.uid) {
        return children
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
}

export default PrivetRout
