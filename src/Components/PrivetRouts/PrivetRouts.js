import React from 'react'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../Context/Contex'
import Spinner from '../Spinner/Spinner'

const PrivetRouts = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const location = useLocation();

    if (loding) {
        return <Spinner></Spinner>;
    }
    else if (user) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

}

export default PrivetRouts
