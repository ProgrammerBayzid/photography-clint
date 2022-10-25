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
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'






    const submit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        form.reset()
        console.log(email, password);

        login(email, password)
            .then((res) => {
                setError('')
                navigate(from, { replace: true })
                toast.success('Login Success')
            })
            .catch((error) => {
                console.log(error);
                setError(error.message)
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
            <form onSubmit={submit}>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input onBlur={(event) => setUserEmail(event.target.value)} name="email" type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name="password" type="text" placeholder="password" className="input input-bordered" />
                                    <p>  {error}</p>
                                    <label onClick={forgetPass} className="label">
                                        <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>


                            </div>
                        </div>
                        <p>  Don't have an account? <Link to="/register">Register Now</Link></p>
                    </div>

                </div>

            </form>

        </div>
    )
}

export default Login
