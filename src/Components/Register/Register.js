import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import signInVactor from '../../images/signin-vactor.jpg'


const Register = () => {
    const { signUpUsingEmailAndPassword, signInUsingGoogle, signInUsignGithub, setUser, setIsLoading, updateProfile, auth } = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const [blankedInput, SetBlankedInput] = useState(false);
    const location = useLocation();
    const history = useHistory()
    const redirect_url = location.state?.from || '/home';

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
        signUpUsingEmailAndPassword(email, password)
            .then((result) => {
                const user = result.user;
                console.log('name:', name);
                setUser(user);
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                    // Profile updated!
                    window.location.reload();
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                })
                history.push(redirect_url);
                console.log(user)
            }).catch(error => {
                alert(error.message)
            }).finally(() => setIsLoading(false));


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
                    <Col  md={12} lg={6} className='w-xs-100 w-md-50'>
                        <div className='image-section'>
                            <img src={signInVactor} alt="sign in" />
                        </div>
                    </Col>

                    <Col  md={12} lg={6} className='w-xs-100 w-md-50'>
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
                                <span className='signin-text mb-3 d-block'>Register with</span>
                                <div className='others-signin-btn'>
                                    <button className='mx-4 violate-btn' onClick={handleSignInUsingGithub} type="submit">
                                        <i className="fab fa-github"></i>
                                    </button>
                                    <button className='mx-4 violate-btn' onClick={handleSignInUsingGoogle}>
                                        <i className="fab fa-google"></i>
                                    </button>
                                </div>
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