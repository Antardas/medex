import React from 'react';
import { ButtonGroup, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.css'
import signInVactor from '../../images/signin-vactor.jpg'
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

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
                            <h5 className='text-muted'>Login your account</h5>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='text-lg-start '><b>Email address</b></Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" className='input-feild-style' />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label><b>Password</b> </Form.Label>
                                    <Form.Control type="password" className='input-feild-style' placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Register" />
                                </Form.Group>
                                <button className='me-4 violate-btn' type="submit">
                                    Sign In
                                </button>
                            </Form>
                            <div className='mt-5'>
                                <span>Sign In with</span>
                                <ButtonGroup>
                                    <button className='mx-4 violate-btn' type="submit">
                                        Facebook
                                    </button>
                                    <button className='mx-4 violate-btn' onClick={signInUsingGoogle}>
                                        Google
                                    </button>
                                </ButtonGroup>
                            </div>
                            <h5 className='mt-4'>Not Registered yet? <Link to='/register' className='text-violate'>Create Account</Link></h5>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Login;