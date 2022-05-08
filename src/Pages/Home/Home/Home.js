import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import Featured from '../Featured/Featured';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Featured></Featured>
        </div>
    );
};

export default Home;