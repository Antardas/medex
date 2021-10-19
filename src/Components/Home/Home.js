import React from 'react';
import Appoinment from '../Appointment/Appoinment';
import HealthCareDoctor from '../HealthCareDoctor/HealthCareDoctor';
import Services from '../Services/Services';
import Banner from './Banner';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Services></Services>
            <HealthCareDoctor></HealthCareDoctor>
            <Appoinment></Appoinment>
        </div>
    );
};

export default Home;