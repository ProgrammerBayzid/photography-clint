import React, { useContext } from 'react'
import { FaFacebook, FaGitAlt, FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import img2 from '../../assets/img/banner-img/img2.png'
import { AuthContext } from '../Context/Context'
import Github from './SocialAccount/Github'
import Google from './SocialAccount/Google'

const Register = () => {

    const { createUser, updateName, verifyEmail, googleSignin, githubSingIn } = useContext(AuthContext)
    const navigate = useNavigate();


    const submit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        form.reset()


        createUser(email, password)
            .then(res => {
                navigate('/')
                toast.success('Thanks For Registation')
                handelUpdetUser(name)
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
                        <h2 className='text-4xl font-bold text-center py-6 '>Sing Up.</h2>
                        <div className='flex flex-col py-2'>
                            <label> Name</label>
                            <input className='border p-2'
                                type="text"
                                name=" name"
                                placeholder=' Name'

                            />

                        </div>

                        <div className='flex flex-col py-2'>
                            <label>Email</label>
                            <input className='border p-2'
                                type="email"
                                name="email"
                                placeholder='email'

                            />

                        </div>


                        <div className='flex flex-col py-2'>
                            <label>Password</label>
                            <input className='border p-2' type="password"
                                name="password"
                                placeholder='password'

                            />

                        </div>

                        <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Sing up</button>

                    </form>

                    <p className='px-6 text-sm text-center text-dark text-black	'>
                        Allready have an account yet?{' '}
                        <Link to='/Login' className='hover:underline text-dark'>
                            Login
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

export default Register
