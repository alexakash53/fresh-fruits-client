import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts ] = useState([])

    useEffect(() =>{
        fetch(`https://immense-mountain-97741.herokuapp.com/my-item?email=${user.email}`)
        .then(res=> res.json())
        .then(data => setProducts(data))
        
    },[user])

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure?');
        if(proceed){
             const url = `https://immense-mountain-97741.herokuapp.com/product/${id}`;
             fetch(url, {
                 method: 'DELETE'
             })
             .then(res => res.json())
             .then(data => {
                //  console.log(data);
                 const remainning = products.filter(products => products._id !== id);
                 setProducts(remainning); 
             })
        }
        toast("Delete Success")
    }

    return (
        <div className='py-5'>
            <ToastContainer/>
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
                            {
                                products.map(product =>
                                    <tr key={product._id}>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.supplier}</td>
                                        <td className='update-icon'> <FaTrashAlt onClick={()=>handleDelete(product._id)} /></td>
                                    </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default MyItem;