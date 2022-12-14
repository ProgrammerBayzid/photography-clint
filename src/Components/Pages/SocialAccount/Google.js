import { GoogleAuthProvider } from 'firebase/auth'
import React from 'react'
import { useContext } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { setAuthToken } from '../../../api/auth'
import { AuthContext } from '../../Context/Context'

const Google = () => {

    const { googleSignin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();

    const navigate = useNavigate()


    const googleSubmit = () => {
        googleSignin(googleProvider)
            .then((result) => {
                toast.success('Register Success')
                const user = result.user;
                setAuthToken(user)
                navigate('/')
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center' onClick={googleSubmit}><FaGoogle className='mr-2' /> Google</p>
        </div>
    )
}

export default Google
