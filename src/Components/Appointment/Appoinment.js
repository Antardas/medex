import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './appointment.css'

const Appoinment = () => {
    const history = useHistory();
    const handleSUbmit = (e) => {
        e.preventDefault();
        history.push('/success-apointment')

    }
    return (
        <div className='appointement my-5'>
            <Container className='text-start'>
            <Row>
                <Col className='detail-appoinment'>
                    <h1 className='text-dark-navy'><b>Contact Now and Get the Best Doctor Service Today</b></h1>
                        <p>Book your appointment online with the top Max Hospital doctors. Get the best medical consultation & treatment with the best doctors at Max Hospitals near</p>
                        <hr />
                        <div className="phone-detail">
                            <div className='phone-icon'>
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div className='phone-info'>
                                <h3><a className='link' href="tel:00123654878">+00 123 654 878</a></h3>
                                <span>Call Now and Get a Free Consulting</span>
                            </div>
                        </div>
                            <div className="appointment-social-information">
                                <span className='email'>
                                    <a  href="mailto:info@medex.com">info@medex.com</a>
                                </span>
                                <ul className="social">
                                    <li>
                                        <a href="https://www.facebook.com/" rel="noreffer">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/?lang=en" rel="noreffer">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" rel="noreffer">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/signup" rel="noreffer">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        
                </Col>
                    <Col className='appointment-form'>
                        <h1 className='text-dark-navy'><b>Make an Appointment</b></h1>
                        <Form onSubmit={handleSUbmit}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicphone">
                                <Form.Label>Your Phone</Form.Label>
                                <Form.Control type="tel" placeholder="Your Phone" />
                                <Form.Text className="text-muted">
                                    We'll never share your number with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Your Meassage</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="I Agree to the Terms & Conditions. I Also Agree that I Am Over 18 Years of Age." />
                            </Form.Group>
                            <button className='violate-btn' type="submit">
                                Submit
                            </button>
                        </Form>
                    </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Appoinment;