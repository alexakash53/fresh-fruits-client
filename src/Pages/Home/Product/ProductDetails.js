import React from 'react';
import './Product.css'

const ProductDetails = () => {
    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 section-title">
                         <h2>Banana (Kola)</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="product-img">
                            <img src="https://i.ibb.co/0D4dNpc/kola.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-details">
                            <h4>Product id : <span>6275a5a1ce55dffbc83834f3</span></h4>
                            <h4>Description : <span>Banana is the most popular fresh fruit in all over the world. It has lots of variety.Banana is one of them.Bananas are comparatively smaller than the normal bananas. Bananas are great super food which provides us with energy, make us feel full and provide our body with essential nutrients and high amount of fiber. Banana is one of the high calorie tropical fruits. 100 grams of its flesh carries 90 calories. Besides, it contains good amount of health benefiting fiber, anti-oxidants, minerals, and vitamins. Bananas could help you to feel happier as they contain tryptophan, a type of protein that the body converts into serotonin, known to promote relaxation and improve mood</span></h4>
                            <h4>Suppier Name : <span>Alex Akash</span></h4>
                            <h4>Price : <span>7736</span></h4>
                            <h4>Stock Quantity : <span>432</span></h4>
                            <h4>Sold : <span>37</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;