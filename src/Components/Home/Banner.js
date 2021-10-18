import React from 'react';
import { Carousel, Col, Row, Container } from 'react-bootstrap';
import slider from '../../images/sliderImages/slider.jpg';
import slider2 from '../../images/sliderImages/slider2.jpg'
import slider3 from '../../images/sliderImages/slider3.jpg'

const Banner = () => {
    return (
        //Carouserl Section
        <div className='mb-5'>
            <Carousel>
                <Carousel.Item>
                    <div style={{ backgroundImage: `url(${slider})`, minHeight: '90vh', backgroundSize: 'cover'}} className='d-block w-100'>
                        <Container>
                            <Row>
                                <Col xs md={7} className='my-5'>
                                    <div className='text-start'>
                                        <h1 className='mt-5 lh-base'>We Provide <span className='text-primary'>Medical</span> Services That You Can <span className='text-primary'>Trust!</span></h1>
                                        <p className='my-5'>Medical availability and clinical practice varies across the world due to regional differences in culture and technology. </p>
                                        <div className='mb-5'>
                                            <button className='btn btn-primary me-5 mb-3'>Get Appointement</button>
                                            <button className='btn btn-dark me-5 mb-3'>About Us</button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ backgroundImage: `url(${slider2})`, minHeight: '90vh', backgroundSize: 'cover'}} className='d-block w-100'>
                        <Container>
                            <Row>
                                <Col xs md={7} className='my-5'>
                                    <div className='text-start'>
                                        <h1 className='mt-5 lh-base'>We Provide <span className='text-primary'>Medical</span> Services That You Can <span className='text-primary'>Trust!</span></h1>
                                        <p className='my-5'>Medical availability and clinical practice varies across the world due to regional differences in culture and technology. </p>
                                        <div className='mb-5'>
                                            <button className='btn btn-primary me-5'>Get Appointement</button>
                                            <button className='btn btn-dark me-5'>About Us</button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ backgroundImage: `url(${slider3})`, minHeight: '90vh', backgroundSize: 'cover' }} className='d-block w-100'>
                        <Container>
                            <Row>
                                <Col xs md={7} className='my-5'>
                                    <div className='text-start'>
                                        <h1 className='mt-5 lh-base'>We Provide <span className='text-primary'>Medical</span> Services That You Can <span className='text-primary'>Trust!</span></h1>
                                        <p className='my-5'>Medical availability and clinical practice varies across the world due to regional differences in culture and technology. </p>
                                        <div className='mb-5'>
                                            <button className='btn btn-primary me-5'>Get Appointement</button>
                                            <button className='btn btn-dark me-5'>About Us</button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;