import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import './service.css'
const ServiceDetail = () => {
    const { services } = useServices();
    const { serviceId } = useParams();
    const [item, setItem] = useState({})
    useEffect(() => {
        services.map(service => {
            if (service._id === parseInt(serviceId)) {
                console.log(service)
                setItem(service);
            }
        })
    }, [services])

    const { img, title, description, surgeon, price, phone } = item
    return (
        <div className='service-container  mt-5 w-lg-50  mx-auto'>
            <div className="service-img">
                <img src={img} alt="" />
            </div>
            <div className='service-detail'>
                <h2>{title}</h2>
                <p className='text-muted'>{description}</p>
                <div className='d-flex direction justify-content-between text-violate'>
                    <b><i className="fas me-3 fontawesome-desgin fa-user-md"></i>Doctor: {surgeon}</b>
                    <b><i className="fas me-3 fontawesome-desgin fa-phone-alt"></i>Phone: {phone}</b>
                    <b className=' text-violate'><i className="fas fa-dollar-sign"></i>Price: {price}</b>
                </div>
                <Link to='/getappointment'><button className='violate-btn mt-5'>Book Service</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetail;