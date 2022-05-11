import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('https://immense-mountain-97741.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    return (
        <div id="products" className='container products-title'>
            <div className="row">
            <h1 className='section-title text-center text-success my-5 col-sm-12'>All Fresh Fruits</h1>
            <div className="products-container">
            {
                products?.slice(0,6)?.map(product => <Product
                    key={product.id}
                    Product={product}
                >
                </Product>)
            }
            </div>
            </div>
            <Link to={'/inventory'}><button className='inv-btn'>Manage inventory</button></Link>
        </div>
    );
};

export default Products;