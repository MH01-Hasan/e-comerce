import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className='container'>
            <div className='row mt-5 mb-5'>
                <div className='col-lg-6 col-sm-12 mt-3'>
                <Card.Img src='https://cdn.shopify.com/s/files/1/0301/7274/1770/files/Untitled-1.png?v=1610109448'/>

                </div>
                <div className='col-lg-6 col-sm-12'>
                    <p className='the'>THE PRODUCTS</p>
                    <h1 className="about">
                    All About Fabulous
                    <hr />
                    </h1>

                    <p className="about-p">
                    More Built-In Tools Than Any Other eCommerce Platform. Reduce Cost And Grow Your Business! Get Instant Access To 100's Of Features, Secure Hosting, And Much More. Try Now For Free! No Hidden Fees. Free Trial. Social Media Integration. Easy To Use.
                    </p>

                    <ul>
                       <div>
                       <li>Eye and facial makeup</li>
                        <li>Hair Serum</li>
                        <li>Makeup Brush</li>
                        <li>Professional Powder</li>
                       </div>
                       <div>
                       <li>Lipstick & Nail Art</li>
                        <li>Skincare Cream</li>
                        <li>Hair Shampoo</li>
                        <li>facial Kit</li>
                       </div>
                       
                    </ul>

                    <button className='about-bat'>VIEW MORE</button>

                </div>

            </div>
        </div>
    );
};

export default About;