import React, { useState } from 'react';
import { ButtonGroup, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import signInVactor from '../../images/signin-vactor.jpg'


const Register = () => {
    const { signUpUsingEmailAndPassword, signInUsingGoogle } = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const [blankedInput, SetBlankedInput] = useState(false);
    const nameBlurEventHandler = (e) => {
        const name = e.target.value;

        if (name.length <= 0) {
            setError('Please Enter your name');
        } else {
            setError('')
            setName(name)
        }
    }
    const emailBlurEventHandler = (e) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const email = e.target.value
        if (emailRegex.test(email)) {
            setError('')
            setEmail(email)
        } else {
            setError('Please Enter right Email')
        }
    }
    const passwordBlurEventHandler = (e) => {
        const pass = e.target.value;

        if (pass.length === 0) {
            setError('Please Enter your password');
        } else if (pass.length < 6) {
            setError('Your password must be 6 Character')
        } else {
            setError('')
            setPassword(pass)
            
        }
    }

// Sign Up Handle
    const signUpHandler = (e) => {
        e.preventDefault();
        signUpUsingEmailAndPassword(name, email, password);

    }
    return (
        <div className='login-form-container text-start mt-5'>
            <Container>
                <Row>
                    <Col xs lg={6}>
                        <div className='image-section'>
                            <img src={signInVactor} alt="sign in" />
                        </div>
                    </Col>

                    <Col xs lg={6}>
                        <div className='form-container'>
                            <h1>Wellcome to Medex</h1>
                            <h5 className='text-muted'>Create a New Account</h5>

                            <Form onSubmit={signUpHandler}>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label className='text-lg-start'><b>Name</b></Form.Label>
                                    <Form.Control type="name" onBlur={nameBlurEventHandler} placeholder="Your name" className='input-feild-style' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='text-lg-start '><b>Email address</b></Form.Label>
                                    <Form.Control type="email" onBlur={emailBlurEventHandler} placeholder="Enter email" className='input-feild-style' />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label><b>Password</b> </Form.Label>
                                    <Form.Control type="password" onBlur={passwordBlurEventHandler} className='input-feild-style' placeholder="Password" />
                                </Form.Group>

                                <button className='me-4 violate-btn' type="submit">
                                    Register
                                </button>
                            </Form>
                            <div className='mt-5'>
                                
                                <h5 className='text-danger'>{error}</h5>
                                <span>Register with</span>
                                <ButtonGroup>
                                    <button className='mx-4 violate-btn' type="submit">
                                        Facebook
                                    </button>
                                    <button className='mx-4 violate-btn' onClick={signInUsingGoogle}>
                                        Google
                                    </button>
                                </ButtonGroup>
                            </div>
                            <h5 className='mt-4'>I am already member <Link to='/login' className='text-violate'>Log in</Link></h5>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Register;