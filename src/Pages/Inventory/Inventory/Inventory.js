import React from 'react';
import { Table } from 'react-bootstrap';
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Inventory = () => {
    return (
        <div className='py-5'>
            <div className="container">
                <div className="inventory">
                      <h2 className='section-title'>Manage inventory</h2>
                      <button className='details-btn mb-4'>Add Items</button>
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
                            <tr>
                                <td>Banana (Kola)</td>
                                <td>234 tk</td>
                                <td>45 Hali</td>
                                <td>Alex Akash</td>
                            <td className='update-icon'> <Link to={'/update-item'}><FaEdit/></Link> <FaTrashAlt/></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Inventory;