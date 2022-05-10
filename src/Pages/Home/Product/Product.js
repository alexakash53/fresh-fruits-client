import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({Product}) => {
    const {_id, name, img, price, quantity} = Product;
    console.log(Product)
    const navigate = useNavigate();

    // const navigateToServiceDetail =() =>{
    //     navigate(`/checkout}`);
    // }
    return (
        <div className='product'>
            <img className='w-60' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{quantity}</small></p>
            <Link to={`/product-details/${_id}`}><button className='btn'>UPDATE PRODUCT</button></Link>
        </div>
    );
};

export default Product;