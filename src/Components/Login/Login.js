import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
    return (
        <div className='login-form-container'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-lg-start'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Register" />
                </Form.Group>
                <Button variant="primary" className='me-4' type="submit">
                    Submit
                </Button>
                <Button variant="secondary" type="submit">
                    Google Sign In
                </Button>
                <h5>Not Registered yet? <Link to='/register' className='text-danger'>Create Account</Link></h5>
            </Form>
        </div>
    );
};

export default Login;