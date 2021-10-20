import React from 'react';
import successAppointment from '../../images/appointment.png'
const SuccessAppointment = () => {
    return (
        <div>
            <h1>Your Appointment SuccessFully</h1>
            <div className='w-100'>

            <img className='w-100' src={successAppointment} alt="" />
            </div>
        </div>
    );
};

export default SuccessAppointment;