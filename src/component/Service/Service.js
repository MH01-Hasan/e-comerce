import React from 'react';
import  './Service.css'

const Service = () => {
    return (
        <div className='mt-5 mb-5 '>
            <div className='service-fild'>
            <p className='the'> THE PRODUCTS</p>
           <h1 className="about">Our Services</h1>
           <hr />
            </div>
          

            <div className='row mx-3'> 
            <div className="col-lg-3 col-sm-12 service">
            <i class="fas fa-truck  service-ion"></i>
            <h5 className='content-h5'>Free Delivery</h5>
            <p className='content'>Faded short sleeves t-shirt with high neckline.sleeves t-shirt with high neckline.</p>

            </div>
            <div className="col-lg-3 col-sm-12 service">
            <i class="fas fa-dollar-sign service-ion"></i>
            <h5 className='content-h5'>Way To Buy</h5>
            <p className='content'>Faded short sleeves t-shirt with high neckline.sleeves t-shirt with high neckline.</p>

            </div>
            <div className="col-lg-3 col-sm-12 service">
            <i class="fas fa-user-alt service-ion"></i>
            <h5 className='content-h5'>Personal Session</h5>
            <p className='content'>Faded short sleeves t-shirt with high neckline.sleeves t-shirt with high neckline.</p>

            </div>
            <div className="col-lg-3 col-sm-12 service">
            <i class="fas fa-gift service-ion"></i>
            <h5 className='content-h5'>Gift Voucher</h5>
            <p className='content'>Faded short sleeves t-shirt with high neckline.sleeves t-shirt with high neckline.</p>

            </div>

            </div>
            
        </div>
    );
};

export default Service;