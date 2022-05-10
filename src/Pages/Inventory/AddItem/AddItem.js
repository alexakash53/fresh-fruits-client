import React from 'react';
import Register from '../../Login/Register/Register';
import './AddItem.css';

const AddItem = () => {
    return (
        <div className='py-5'>
            <div className='w-50 mx-auto'>
            <h2 className='section-title'>add New Items</h2>
             <form className='d-flex flex-column' onSubmit={(onsubmit)}>
                <input className='mb-2' placeholder='Name' {...Register("Name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Price' type="number" {...Register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...Register("Quantity")} />
                <input className='mb-2' placeholder='Suplier Name' type="Name" {...Register("Name")} />
                <input className='mb-2' placeholder='photo url' type="text" {...Register("img")} />
                <textarea className='mb-2' placeholder='Description' {...Register("Description")} />
                <input className='item-btn' type="submit" value="Add Items" />
             </form>
        </div>
        </div>
    );
};

export default AddItem;