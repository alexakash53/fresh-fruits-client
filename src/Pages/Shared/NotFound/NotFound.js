import React from 'react';
import error from '../../../Images/error.jpg'

const NotFound = () => {
    return (
        <div style = {
            {
                textAlign: 'center',
                marginTop: '50px'
            }
        }>
            <img style={{width:'50%'}} src= { error } alt="" />
        </div>
    );
};

export default NotFound;