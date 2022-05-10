import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Register from '../../Login/Register/Register';
import './Product.css'

const ProductDetails = () => {
    const {id} = useParams()
    const [service, setService] = useState({})
    console.log(service)
    useEffect( () =>{
        const url = `http://localhost:5000/product/${id}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setService(data));
    }, [id]);

    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 section-title">
                         <h2>{service.name}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="product-img">
                            <img src={service.img} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-details">
                            <h4>Product id : <span>{service._id}</span></h4>
                            <h4>Description : <span>{service.details}</span></h4>
                            <h4>Suppier Name : <span>{service.name}</span></h4>
                            <h4>Price : <span>{service.price}</span></h4>
                            <h4>Stock Quantity : <span>{service.quantity}</span></h4>
                            <h4>Sold : <span>{service.sold}</span></h4>
                        </div>
                        <div className="details-info">
                            <button className='details-btn me-4'>Deleverd</button>
                            <input className='mb-2' placeholder='Quantity' type="number" {...Register("Quantity")} /> <button className='details-btn'>Stock Update</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;