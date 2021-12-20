import React from 'react';
import About from '../About/About';

import Banner from '../Banner/Banner';
import Product from '../product/Product';
import Service from '../Service/Service';
import SetTimer from '../SetTimer/SetTimer';

import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Product></Product>
            <SetTimer></SetTimer>
           
           
          
   
        </div>
    );
};

export default Home;