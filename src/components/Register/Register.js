import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/UserContext'
import './Register.css'
const Register = () => {
    const { createUser } = useContext(AuthContext)
    const submit = (event) => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password,);

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                // form.reset();
            })
            .catch(err => {
                console.error(err);
            })
    }
    return (
        <div className='form-container'>
            <h3 className='form-title'>Sign-Up</h3>
            <form onSubmit={submit} >
                <div className="">
                    <div className="card-body">
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
                                <p>Allready Have An Account. Pleases.. <Link to="/login" className="label-text-alt link link-hover">Login</Link></p>
                            </label>
                        </div>
                        <div className="btnd">
                            <button className="btn">Sign-up</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register
