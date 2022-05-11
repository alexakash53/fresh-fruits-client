import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Register from '../../Login/Register/Register';
import './Product.css'

const ProductDetails = () => {
    const {id} = useParams()
    const [service, setService] = useState({})
    console.log(service)
    useEffect( () =>{
        const url = `https://immense-mountain-97741.herokuapp.com/product/${id}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setService(data));
    }, [id]);

    const handleQuantityUpdate=(event) =>{
        event.preventDefault();
        const previousQuantity=service.quantity;
        const userProvideQuantity=event.target.quantity.value;
        const productSold=service.sold;
        event.target.reset();
        const updatedstock={quantity: (parseFloat(previousQuantity) + parseFloat(userProvideQuantity)), sold: productSold };
        console.log(updatedstock)
        const url= `https://immense-mountain-97741.herokuapp.com/updatestock/${id}`
        fetch(url,{
        method: "PUT",
        headers:{
        'content-type': 'application/json'
        },
        body: JSON.stringify(updatedstock)
        })
        .then(response => response.json())
        .then(data =>{
        console.log('success', data);
        toast("Stock Updated!!!")
        window.location.reload(true)
        })
    }


    const handleSoldUpdate=() =>{
        const productSold=service.quantity;
        const updatedstock={ quantity: parseFloat(productSold) -1 };
        // console.log(updatedstock)
        const url= `https://immense-mountain-97741.herokuapp.com/updatesold/${id}`
        fetch(url,{
        method: "PUT",
        headers:{
        'content-type': 'application/json'
        },
        body: JSON.stringify(updatedstock)
        })
        .then(response => response.json())
        .then(data =>{
        console.log('success', data);
        toast("Stock Updated!!!")
        window.location.reload(true)
        })
    }


    return (
        <div className='py-5'>
            <ToastContainer/>
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
                            <h4>Supplier Name : <span>{service.name}</span></h4>
                            <h4>Price : <span>{service.price}</span></h4>
                            <h4>Stock Quantity : <span>{service.quantity}</span></h4>
                            <h4>Sold : <span>{service.sold}</span></h4>
                        </div>
                        <div className="details-info d-flex">
                            <button className='details-btn me-4' onClick={handleSoldUpdate} >Deleverd</button>
                            <form onSubmit={handleQuantityUpdate}>
                                <input className='mb-2' placeholder='Quantity' type="number" name='quantity' /> 
                                <button className='details-btn'>Stock Update</button> 
                            </form>
                        </div>
                        <Link to={'/inventory'}><button className='details-btn'>Manage inventory</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;