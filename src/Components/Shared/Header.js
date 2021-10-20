import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { HashLink } from 'react-router-hash-link'
import './Header.css'
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo}
                        alt=""
                        width="100px"
                        className="d-inline-block align-top " /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className='text-danger' />
                    <Navbar.Collapse id="navbarScroll" className='mx-auto'>
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='text-light menu-item menu-style' as={Link} to="/home">Home</Nav.Link>
                            <HashLink className='text-light menu-item menu-style nav-link' as={Link} to="/home#services">Services</HashLink>
                            {
                                user?.email ?
                                    <span><span className='text-danger menu-style d-inline-block me-3'>User Name: {user.displayName}</span><button className='violate-btn' onClick={logOut}>Log Out</button></span>
                                    :
                                    <>
                                        <Nav.Link className='text-light menu-item menu-style' as={Link} to="/Login" >Login</Nav.Link>
                                        <Nav.Link className='text-light menu-item ' as={Link} to="/Register" ><button className='violate-btn'>Register</button></Nav.Link>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;