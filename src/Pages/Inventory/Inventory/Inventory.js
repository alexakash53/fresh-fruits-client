import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    return (
        <div className='py-5'>
            <div className="container">
                <div className="inventory">
                      <h2 className='section-title'>Manage inventory</h2>
                      <Link to={'/add-item'}><button className='details-btn mb-4'>Add Items</button></Link>
                </div>
                <div className="inventory-table">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Supplier</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product => 
                                    <tr key={product._id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.supplier}</td>
                            <td className='update-icon'> <Link to={'/update-item'}><FaEdit/></Link> <FaTrashAlt/></td>
                            </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Inventory;