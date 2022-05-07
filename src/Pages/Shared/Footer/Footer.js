import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center p-4 bg-dark'>
            <p><small>All Rights Reserved By Fresh Fruits &copy; {year} </small></p>
        </footer>
    );
};

export default Footer;