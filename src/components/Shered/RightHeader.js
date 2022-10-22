import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitch, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carouse from '../Carouse/Carouse';
import { AuthContext } from '../Context/Context';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';
const RightHeader = () => {
    const { googleSignin } = useContext(AuthContext)

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


    return (
        <div className='mt-5'>
            <ButtonGroup vertical>
                <Button onClick={googleSubmit} variant="outline-primary" className='mb-2'><FaGoogle></FaGoogle>  Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub>  Login with Github</Button>
            </ButtonGroup>
            <div className='mt-3'>
                <h6>Find Us On </h6>
                <ListGroup>
                    <ListGroup.Item className='mb-2'> <FaFacebook /> Facebook </ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaTwitch /> Twitch</ListGroup.Item>
                </ListGroup>
            </div>

            <div className='mt-5'>
                <Carouse></Carouse>
            </div>

        </div>
    )
}

export default RightHeader
