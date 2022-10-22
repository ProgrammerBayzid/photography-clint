import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';
import Button from 'react-bootstrap/Button';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../Context/Context';
import { toast } from 'react-toastify';
import { Image } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handelLogOut = () => {
        logOut()
            .then(toast.success('Successfully Logout'))
            .catch(err => { console.log(err); })
    }

    return (
        <div className='mb-3'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand ><Link to='/'><Button variant="primary">Dragon News</Button>
                    </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/'><Button variant="primary">All News</Button></Link>

                        </Nav>
                        <div className='mt-2'>
                            {user?.uid ? <div >
                                <span className='ms-2'>{user?.displayName}</span>

                                <Link to='/profile'><span className='ms-2'>{user?.photoURL ?
                                    <Image
                                        style={{ height: '30px' }} roundedCircle
                                        src={user.photoURL}

                                    ></Image>

                                    :
                                    <p>No Photo</p>
                                }</span></Link>
                                <Button className='ms-2' onClick={handelLogOut} variant="primary">log Out</Button>

                            </div> : <>
                                <Link to='/login'><Button className='me-2' variant="primary">log In</Button></Link>
                                <Link to='/register'><Button variant="primary">Sing Up</Button></Link>
                            </>
                            }


                        </div>
                        <div className='d-lg-none'>

                            <LeftHeader></LeftHeader>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header




{/* <Link>
{user.photoURL ?
    <Image

        style={{ height: '30px' }} roundedCircle
        src={user.photoURL}
    >

    </Image>
}
</Link> */}