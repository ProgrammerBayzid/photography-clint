import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/Context';

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
                toast.success('Check your email To reset password')
            })
            .catch(error => toast.error(error.message))
    }


    return (
        <div>
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={(event) => setUserEmail(event.target.value)} name='email' type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 text-danger">
                    {error}
                </Form.Group>
                <Link>
                    <Form.Group onClick={forgetPass} className="mb-3 text-danger">
                        Forget Password
                    </Form.Group>
                </Link>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
        </div>
    )
}

export default Login
