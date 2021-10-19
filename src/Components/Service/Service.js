import React from 'react';
import { Link } from 'react-router-dom';

import './service.css'

const Service = ({ service }) => {
    const { img, title, description, _id } = service;
    return (
        <div className='service-card' >
            <div className="img">
                <img src={img} alt={title} />
            </div>

            <div className="content">
                <h3 className='text-primary my-3'>{title}</h3>
                <p className='text-justify lh-base'>{description.slice(0, 100)}...</p>
                <Link to={`service/${_id}`}><button className='btn-primary btn my-2'>Learn More</button></Link>
        </div>
        </div >
    );
};

export default Service;