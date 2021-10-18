import React from 'react';

import './service.css'

const Service = ({ service }) => {
    const { img, title, description } = service;
    return (
        <div className='service-card' >
            <div className="img">
                <img src={img} alt={title}/>
            </div>
            
            <div className="content">
                <h3 className='text-primary my-3'>{title}</h3>
                <p className='text-justify lh-base'>{description.slice(0, 100)}...</p>
                <button className='btn-primary btn my-2'>Learn More</button>
            </div>
        </div>
    );
};

export default Service;