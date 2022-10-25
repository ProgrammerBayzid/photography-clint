import { GoogleAuthProvider } from 'firebase/auth'
import React, { useContext } from 'react'
import { useState } from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../../Context/Contex'

const Register = () => {
    const { createUser, updateName, verifyEmail, googleSignin } = useContext(AuthContext)
    const navigate = useNavigate()

    const [error, setError] = useState('')



    const googleProvider = new GoogleAuthProvider();


    const googleSubmit = () => {
        googleSignin(googleProvider)
            .then((result) => {
                toast.success('Register Success')
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }


    const submit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        form.reset()


        createUser(email, password)
            .then(res => {
                navigate('/')
                toast.success('Thanks For Registation')
                handelUpdetUser(name, photoURL)
                handelEmailVeryfi()
            })
            .catch(error => {
                console.error(error);
            })

    }

    const handelUpdetUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateName(profile)
            .then(() => {
                toast.success('Update Profile')
            })
            .catch((error) => {
                toast.error(error.massage)
            });
    }

    const handelEmailVeryfi = () => {
        verifyEmail()
            .then(() => {
                toast.success('Verify Your Email')
            })
            .catch(error => {
                toast.error(error.massage)
            })
    }



    return (
        <div>
            <form className='register-form' onSubmit={submit} >
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col ">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name='name' type="text" placeholder="Enter Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">photoURL</span>
                                    </label>
                                    <input name='photoURL' type="text" placeholder="Enter Your PhotoURl" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        name='email'
                                        type="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                    // value={userInfo.email}
                                    // onChange={handelEmailChange}
                                    />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        name='password'
                                        type="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                    // value={userInfo.password}
                                    // onChange={handelPasswordChange}

                                    />
                                    <p>{error}</p>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                                <div onClick={googleSubmit} className="form-control mt-6">
                                    <button className="btn btn-primary  gap-2"> <FaGoogle></FaGoogle>Login with Google</button>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary gap-2"><FaGithub></FaGithub>  Login with GitHub</button>
                                </div>
                            </div>
                        </div>
                        <p>  Allready have an account? <Link to="/login">Log In </Link></p>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Register

















// const { userInfo, setUserInfo } = useState({
//     email: '',
//     password: ''
// })
// const { error, setError } = useState({
//     email: '',
//     password: ''
// })

// const handelSubmit = (event) => {
//     event.preventDefault()
//     const email = event.target.email.value;
//     const password = event.target.password.value;
//     const name = event.target.name.value;
//     const photoURL = event.photoURL.email.value;

// }
// const handelEmailChange = (event) => {
//     const email = event.target.value;
//     if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
//         setError({ ...error, email: "Please Provide a Valid email" });
//         setUserInfo({ ...userInfo, email: '' })
//     }
//     else {
//         setError({ ...error, email: "" });
//         setUserInfo({ ...userInfo, email: event.target.value })

//     }
// }

// const handelPasswordChange = (event) => {
//     const password = event.target.value;
//     if (password.length < 6) {
//         setError({ ...error, password: "Must be at least 6 characters" });
//         setUserInfo({ ...userInfo, password: '' })
//     }
//     else {
//         setError({ ...error, password: "" });
//         setUserInfo({ ...userInfo, password: event.target.value })

//     }
// }












