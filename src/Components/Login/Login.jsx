import { GoogleAuthProvider } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../Context/Contex'

const Login = () => {

    const { login, forgetPassword } = useContext(AuthContext)
    const [userEmail, setUserEmail] = useState('')
    const [error, setError] = useState('')
    const [emailError, setemailError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const submit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        login(email, password)
            .then((res) => {
                setemailError('')
                setError('')
                navigate(from, { replace: true })
                form.reset()
                toast.success('Login Success')

            })
            .catch((error) => {
                console.log(error);
                setemailError('Invalid Email')
                setError("wrong password")
            });

    }
    const forgetPass = () => {
        forgetPassword(userEmail)
            .then(() => {
                toast
                    .success('Check your email To reset password')
            })
            .catch(error => toast.error(error.message))
    }


    return (
        <div>
            <div className='flex justify-center items-center pt-8'>
                <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold'>Log in</h1>
                        <p className='text-sm text-dark'>
                            Login in to access your account
                        </p>
                    </div>
                    <form
                        onSubmit={submit}
                        noValidate=''
                        action=''
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address
                                </label>
                                <input
                                    onBlur={(event) => setUserEmail(event.target.value)}
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <p>{emailError}</p>

                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-sm mb-2'>
                                        Password
                                    </label>
                                </div>
                                <input
                                    type='password'
                                    name='password'
                                    id='password'
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                                />
                            </div>
                        </div>
                        <p>{error}</p>
                        <div>
                            <button
                                type='submit'
                                className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                            >
                                Log In
                            </button>
                        </div>
                    </form>
                    <div className='space-y-1'>
                        <button onClick={forgetPass} className='text-xs hover:underline text-dark'>
                            Forgot password?
                        </button>
                    </div>


                    <p className='px-6 text-sm text-center text-dark'>
                        Don't have an account yet?{' '}
                        <Link to='/register' className='hover:underline text-dark'>
                            Register
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
