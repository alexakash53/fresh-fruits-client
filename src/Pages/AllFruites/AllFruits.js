import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';

const AllFruits = () => {

    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('fakeData/fruits.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    return (
        <div id="products" className='container products-title'>
            <div className="row">
            <h1 className='text-center my-5 col-sm-12'> Our Products</h1>
            <div className="products-container">
            {
                products.map(product => <Product
                    key={product.id}
                    Product={product}
                >
                </Product>)
            }
            </div>
            </div>
        </div>
    );
};

export default AllFruits;