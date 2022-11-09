import React, { useContext, useState } from 'react'
import { FaGithubAlt, FaGoogle } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { setAuthToken } from '../../api/auth'
import img2 from '../../assets/img/banner-img/img2.png'
import useTitle from '../../hooks/useTitle'
import { AuthContext } from '../Context/Context'
import Github from './SocialAccount/Github'
import Google from './SocialAccount/Google'


const Login = () => {
    useTitle('login')

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


        login(email, password)
            .then((res) => {
                const user = res.user;

                setemailError('')
                setError('')
                toast.success('Login Success')
                form.reset()
                // get jwt toke 
                const currentUser = {
                    email: user.email
                }
                fetch('https://photograghy-server.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem("token", data.token)
                        navigate(from, { replace: true })
                    })


            })
            .catch((error) => {
                console.log(error);
                setemailError('Invalid Email')
                setError("wrong password")
            });

    };

    // forget password 
    const forgetPass = () => {
        forgetPassword(userEmail)
            .then(() => {
                toast
                    .success('Check your email To reset password')
            })
            .catch(error => toast.error(error.message))
    }


    // get jwt token 
    // const jwtToken = (currentUser) => {

    // }



    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={img2} alt="" />
            </div>

            <div className='bg-primery-100 flex flex-col justify-center'>

                <div className='max-w-[400px] w-full mx-auto bg-white p-4'>
                    <form
                        onSubmit={submit}
                        className='text-black	'>
                        <h2 className='text-4xl font-bold text-center py-6 '>Log In.</h2>
                        <div className='flex flex-col py-2'>
                            <label>Email</label>
                            <input className='border p-2'
                                type="email"
                                onBlur={(event) => setUserEmail(event.target.value)}
                                name="email"
                                placeholder='email'

                            />

                        </div>
                        <p className='text-red-500	'>{emailError}</p>

                        <div className='flex flex-col py-2'>
                            <label>Password</label>
                            <input className='border p-2' type="password"
                                name="password"
                                placeholder='password'

                            />

                        </div>
                        <p className='text-red-500	'>{error}</p>

                        <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Log In</button>

                    </form>
                    <div className='space-y-1 '>
                        <button onClick={forgetPass} className='text-xs hover:underline text-black	'>
                            Forgot password?
                        </button>
                    </div>
                    <p className='px-6 text-sm text-center text-dark text-black	'>
                        Don't have an account yet?{' '}
                        <Link to='/register' className='hover:underline text-dark'>
                            Register
                        </Link>

                    </p>
                    <div className=''>
                        <div className='mr-60 mt-5 text-black	'>
                            <Google></Google>
                        </div>
                        <div className='mr-60 mt-5 text-black	'>
                            <Github></Github>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Login
