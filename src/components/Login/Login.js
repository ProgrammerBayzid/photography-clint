import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/UserContext'
import './Login.css'

const Login = () => {


    const { signIn, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    console.log(from);
    const submit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password,);
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
                // navigate(from, { replace: true });

            })
            .catch(err => {
                console.error(err);
            })
    }
    useEffect(() => {
        console.log(from);
        if (user && user.uid) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])
    return (
        <div className='form-container'>
            <h3 className='form-title'>Login</h3>
            <form onSubmit={submit} >
                <div className="">
                    <div className="card-body">
                        <div className="form-control">
                            <label >
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" required />
                        </div>
                        <div className="form-control">
                            <label >
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" required />
                        </div>
                        <div className="form-control">
                            <label >
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" required />
                            <label >
                                <Link to="#" className="">Forgot password?</Link>
                            </label>
                            <label >
                                <p>If You New This Website. Pleases.. <Link to="/register" className="label-text-alt link link-hover">Sign-up</Link></p>
                            </label>
                        </div>
                        <div className="btnd">
                            <button className="btn">Login</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
