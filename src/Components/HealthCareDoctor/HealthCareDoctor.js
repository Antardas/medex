import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './healthCareDoctor.css'
import healCareDoctor from '../../images/healthe-care-doctor.png'
import healthCareStethoscopoe from '../../images/stethoscope.png'
import { Link } from 'react-router-dom';
const HealthCareDoctor = () => {
    return (
        <div className='mt-5'>
            <Container className='text-start healthcara-continer mt-5'>
                <h6 className='text-primary'>Quality Healthcare</h6>
                <Row>
                    <Col xs={12} lg={6} className='my-sm-4'>
                        <h1 className='text-dark-navy my-3 '><b>Have Certified and High Quality Doctor For You</b></h1>
                        <p className='lh-base'>Our medical clinic provides quality care for the entire family while maintaining a personable atmosphere best services. Our medical clinic provides quality. Our medical clinic provides quality care for the entire family while maintaining lizam a personable atmosphere best services. Our medical clinic provides</p>
                        <Link to='/getappointment'><button className='violate-btn mx-auto mt-3'>Book Appointment</button></Link>
                        <div className='healthcare-stethoscope'>
                            <img src={healthCareStethoscopoe} alt="" />
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className='my-sm-4'>
                        <div className="doctor-img">
                            <img src={healCareDoctor} alt="" />
                            <div className="circle-pattern"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HealthCareDoctor;