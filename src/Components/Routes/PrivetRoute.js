import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/Context';
import Spinner from '../Pages/Spinner';

const PrivetRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const location = useLocation();

    if (loding) {
        return <Spinner></Spinner>;
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

}

export default PrivetRoute
