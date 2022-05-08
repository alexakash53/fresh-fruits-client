import React from 'react';
import './Featured.css'

const Banner = () => {
    return (
        <div className='feature-area container'>
            <div className="text-feature">
                <h2>Fresh Fruits <br /><span>And Organic</span></h2>
                <p>We shorten the time between the farm and your table. Our motto is to deliver the local food which is better, fresher and tastier. The wholesale prices that farmers get for their products are low, often near the cost of production. It is an investment in the future. By supporting local farmers today, we are helping to ensure that there will be farms in our community tomorrow!</p>
                <button className='btn'>Shop April Sale</button>
            </div>
            <div className="img-banner">
                < img src = "https://i.ibb.co/yST25TB/pngkit-fruit-png-146522.png" alt = "fruits" / >
            </div>
        </div>
    );
};

export default Banner;