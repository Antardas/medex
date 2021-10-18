import React from 'react';
import { Container } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './services.css'

const Services = () => {
    //get all services from services.josn file
    const { services } = useServices();
    return (
        <div id='services'>
            <Container>
                <h1 className='text-dark-navy text-start'>Services</h1>
                <div className="services-container">
                    {services.map(service => <Service service={service} key={service._id}></Service>)}
                </div>
            </Container>
        </div>
    );
};

export default Services;