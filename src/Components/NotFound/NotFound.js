import React from 'react';
import './notfound.css'
import notFound from '../../images/404.gif';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='not-found-container' >
            <img src={notFound} alt="" />
            <br />
            <Link to='/home'><button className='violate-btn'>Go Back</button></Link>
        </div>
    );
};

export default NotFound;