import React from 'react';
import { FcInTransit, FcAssistant, FcPaid, FcPhone} from "react-icons/fc";
import './Service.css'


const Service = () => {
    return (
        <div className='service-area py-5'>
            <div className="section-title tx-center mb-5">
                <h2 className='text-success'>Our Services</h2>
                <p>We have open a delivery customer service. Now you can order us by mail or over phone. <br/> And we are delivering on as you want. </p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="single-service">
                            <FcPhone className='icon' />
                            <h2>Fast Delevery</h2>
                            <p>We have open a delivery customer service. Now you can order us by mail or over phone. And we are delivering on as you want. All delivering responsibilities are on our hand. Just Order us.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="single-service">
                            <FcInTransit className='icon' />
                            <h2>Fast Service</h2>
                            <p>We are delivering a fast customer service. Now you can order us by mail or over phone. And we are delivering on as you want. All delivering responsibilities are on our hand. Just Order us.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="single-service">
                            <FcPaid className='icon' />
                            <h2>Good Quality</h2>
                            <p>We are delivering a good quality service. Now you can order us by mail or over phone. And we are delivering on as you want. All delivering responsibilities are on our hand. Just Order us.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="single-service">
                            <FcAssistant className='icon' />
                            <h2>Customer Service</h2>
                            <p>We are delivering a good quality service. Now you can order us by mail or over phone. And we are delivering on as you want. All delivering responsibilities are on our hand. Just Order us.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;