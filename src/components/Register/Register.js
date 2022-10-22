import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../Context/Context';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {

    const { createUser, updateName, verifyEmail } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const [accept, setAccept] = useState(false)

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
                setError('')
                navigate('/')
                toast.success('Thanks For Registation')
                handelUpdetUser(name, photoURL)
                handelEmailVeryfi()
            })
            .catch(error => {
                console.error(error);
                setError(error.massage)
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



    const handelAccept = event => {
        setAccept(event.target.checked)
    }


    return (
        <div>
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Type Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Type Your Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Paste PhotoURL" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={handelAccept}
                        label={<>Accept<Link to='/terms'> Terms and conditions</Link></>}
                    />
                </Form.Group>
                <Form.Group className="mb-3 text-danger">
                    {error}
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accept}>
                    Sing Up
                </Button>
            </Form>
        </div>
    )
}

export default Register
