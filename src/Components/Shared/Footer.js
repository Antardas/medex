import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import signature from '../../images/singnature.png'
import ceo from '../../images/ceo.png'
import footeVactor from '../../images/footer-vactor.png'
import footeBg from '../../images/footer-bg.jpg'
import './footer.css'
import { NavHashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className='mt-5 footer-container' style={{ backgroundImage: `url(${footeBg})`, backgroundSize: 'cover' }}>
            <Container className='py-5'>
                <Row>
                    <Col xs lg={3} sm={6}>
                        <div className="signle-footer-widget">
                            <div className='logo'>
                                <img src={logo} alt="logo" />
                            </div>
                            <p className='company-description'>Our medical clinic provides quality care for the entire family while maintaining a personable atmosphere best services. Our medical clinic provides quality. Our medical clinic provides quality care for the entire family while maintaining lizam a personable atmosphere best services. Our medical clinic provides.</p>
                            <div className="signatue">
                                <img src={signature} alt="signature" />
                            </div>
                            <Row className="ceo-container d-flex">
                                <Col xs md={4}>
                                    <div className='ceo-img'>
                                        <img src={ceo} alt="CEO" />
                                    </div>
                                </Col>
                                <Col xs md={8} className='ceo-detail'>
                                    <h5>Dr. Thomas Albin</h5>
                                    <span>CEO & Founder </span>
                                </Col>
                            </Row>

                        </div>
                    </Col>
                    <Col xs lg={4} sm={6}>
                        <div className="signle-footer-widget">
                            <div className="footer-image">

                                <img src={footeVactor} alt="" />
                            </div>
                        </div>
                    </Col>
                {/* Useful Link */}
                    <Col xs lg={2} sm={6}>
                        <div className="signle-footer-widget">
                            <h3 className='text-dark-navy'>Useful Link</h3>
                            <ul>
                                <li className='userful-link'><NavHashLink className='text-dark-navy' as={Link} to="#">&#62;Home</NavHashLink></li>
                                <li className='userful-link'><NavHashLink className='text-dark-navy' as={Link} to="/home#services">&#62;Services</NavHashLink></li>
                                <li className='userful-link'><NavHashLink className='text-dark-navy' as={Link} to="/home#contact">&#62;Contact Us</NavHashLink></li>
                                <li className='userful-link'><NavHashLink className='text-dark-navy' as={Link} to="/home#about">&#62;About us</NavHashLink></li>
                                <li className='userful-link'><NavHashLink className='text-dark-navy' as={Link} to="/login#">&#62;Log In</NavHashLink></li>
                                <li className='userful-link'><NavHashLink className='text-dark-navy' as={Link} to="/register#">&#62;Sign Up</NavHashLink></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs lg={3} sm={6}>
                        <div className="signle-footer-widget contact-information">
                            <h3 className='text-dark-navy'>Contact Information</h3>
                            <ul className='text-start'>
                                <li className='d-flex'>
                                    <div className='me-4'>
                                    <i className="fas fontawsome-icon-color fa-phone-alt"></i>
                                    </div>
                                    <div>
                                    <h5> <a href="tel:00123654878">00123654878</a> </h5>
                                    <span>Call Today</span>
                                    </div>
                                </li>
                                <li className='d-flex'>
                                    <div className='me-4'>
                                        <i className="far fontawsome-icon-color fas fa-clock"></i>
                                    </div>
                                    <div>
                                    <h5>09:00 AM to 18:00 PM</h5>
                                    <span>Open Hour</span>
                                    </div>
                                </li>
                                <li className='d-flex'>
                                    <div className='me-4'>
                                        <i className="fas fontawsome-icon-color fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                    <h5>35 West Dental Street California 1004</h5>
                                    <span>Our Location</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <hr className='mt-5' />
                    <h5>Copyright © 2021 Medip All Rights Reserved by <span className='text-primary'>Antar Das</span></h5>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;