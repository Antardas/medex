import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { HashLink, NavHashLink } from 'react-router-hash-link'
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo}
                        alt=""
                        width="100px"
                        className="d-inline-block align-top"/> </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link><NavHashLink as={Link} to="/home#services">Services</NavHashLink></Nav.Link>
                        <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                        {
                            
                        }
                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;