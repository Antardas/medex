import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

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
                <Col>
                    <h1><b>Contact Now and Get the Best Doctor Service Today</b></h1>
                    <p>Book your appointment online with the top Max Hospital doctors. Get the best medical consultation & treatment with the best doctors at Max Hospitals near</p>
                </Col>
                    <Col>
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