import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './AddItem.css';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';


const AddItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.email=user.email
    console.log(data)
    const url = `https://immense-mountain-97741.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            toast("Item added success.")
            reset() 
        })
 }
    return (
        <div className='py-5'>
            <ToastContainer/>
            <div className='w-50 mx-auto'>
            <h2 className='section-title'>add New Items</h2>
             <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Suplier Name' type="text" {...register("supplier")} />
                <input className='mb-2' placeholder='photo url' type="text" {...register("img")} />
                <textarea className='mb-2' placeholder='Description' {...register("details")} />
                <input className='item-btn' type="submit" value="Add Items" />
             </form>
        </div>
        </div>
    );
};

export default AddItem;