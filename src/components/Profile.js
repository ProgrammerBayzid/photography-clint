import React, { useContext, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { AuthContext } from './Context/Context'
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user, logOut } = useContext(AuthContext)
    const [name, setName] = useState(user.displayName)
    const photoURLRef = useRef(user.photoURL)
    const handelLogOut = () => {
        logOut()
            .then(toast.success('Successfully Logout'))
            .catch(err => { console.log(err); })
    }


    const submit = event => {
        event.preventDefault();
        console.log(photoURLRef.current.value);
    }
    const nameChange = event => {
        setName(event.target.value);
    }


    return (

        <div>
            <div className=''>

                <div className='d-flex '>
                    <img
                        src={user?.photoURL}
                        referrerPolicy='no-referrer'
                        alt=''
                        className='  w-25 h-25 rounded-circle '
                    />
                    <h2 className=''>
                        {user?.displayName ? user.displayName : 'Name Not Available'}
                    </h2>
                </div>

                <div>
                    <span className=''>
                        <span className=''>
                            {' '}
                            ID: {user?.uid}
                        </span>
                    </span>
                </div>

                <div>
                    <span className=''>{user?.email}</span>
                </div>
                <div>
                    <span className=''>
                        {' '}
                        Email Status: {user?.emailVerified ? <span className=''>Verified</span> : <span className=''>Not Verified</span>}
                    </span>
                </div>

                <Form onSubmit={submit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control onChange={nameChange} defaultValue={name} type="name" placeholder="name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>photoURL</Form.Label>
                        <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="photoURL" placeholder="photoURL" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>





                {
                    user?.uid ? <div>
                        <Button className='' onClick={handelLogOut} variant="primary">log Out</Button>
                    </div>
                        :
                        <Link to='/login'>
                            <Button className='' variant="primary">log In</Button>
                        </Link>
                }

            </div>
        </div>



    )
}

export default Profile
