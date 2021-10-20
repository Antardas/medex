import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './login.css'
import signInVactor from '../../images/signin-vactor.jpg'
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, logInUsingEmailAndPassword, signInUsignGithub, setUser, setIsLoading } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory()
    const redirect_url = location.state?.from || '/home';
    console.log(redirect_url)

    // Get user input email
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
    // Get user input Password
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
    const emailAndPasswrodSignInHandler = (e) => {
        e.preventDefault();
        logInUsingEmailAndPassword(email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUser(user);
                history.push(redirect_url);
                console.log('redirecturl', redirect_url);
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            }).finally(() => setIsLoading(false))

    }
    const handleSignInUsingGoogle = () => {
        signInUsingGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                history.push(redirect_url)
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                setIsLoading(false)
            })
    }
    const handleSignInUsingGithub = () => {
        signInUsignGithub()
            .then((result) => {
                const user = result.user;
                setUser(user);
                history.push(redirect_url)
            }).catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            }).finally(() => setIsLoading(false))
    }

    return (
        <div className='login-form-container text-start mt-5'>
            <Container>
                <Row>
                    <Col className='w-xs-100 w-md-50' md={12} lg={6}>
                        <div className='image-section'>
                            <img src={signInVactor} alt="sign in" />
                        </div>
                    </Col>
                    <Col className='w-xs-100 w-md-50' md={12} lg={6}>
                        <div className='form-container'>
                            <h1>Wellcome to Medex</h1>
                            <h5 className='text-muted'>Login your account</h5>
                            <Form onSubmit={emailAndPasswrodSignInHandler}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='text-lg-start '><b>Email address</b></Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" className='input-feild-style' onBlur={emailBlurEventHandler} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label><b>Password</b> </Form.Label>
                                    <Form.Control type="password" className='input-feild-style' placeholder="Password" onBlur={passwordBlurEventHandler} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Rememember Me" />
                                </Form.Group>
                                <button className='me-4 violate-btn' type="submit">
                                    Sign In
                                </button>
                            </Form>
                            <div className='mt-5'>
                                <div>
                                    {error && <h4 className='text-danger'>{error}</h4>}
                                </div>
                                <span className='signin-text mb-3 d-block'>Sign In with</span>
                                <div className='others-signin-btn'>
                                    <button className='mx-4 violate-btn' onClick={handleSignInUsingGithub} type="submit">
                                        <i className="fab fa-github"></i>
                                    </button>
                                    <button className='mx-4 violate-btn' onClick={handleSignInUsingGoogle}>
                                        <i className="fab fa-google"></i>
                                    </button>
                                </div>
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