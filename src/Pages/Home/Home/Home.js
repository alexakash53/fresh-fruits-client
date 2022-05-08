import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import Featured from '../Featured/Featured';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Products></Products>
            <Featured></Featured>
        </div>
    );
};

export default Home;