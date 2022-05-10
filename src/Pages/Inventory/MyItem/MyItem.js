import React from 'react';
import { Table } from 'react-bootstrap';
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MyItem = () => {
    return (
        <div className='py-5'>
            <div className="container">
                <div className="my-item">
                      <h2 className='section-title'>My Items</h2>
                </div>
                <div className="item-table">
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

export default MyItem;