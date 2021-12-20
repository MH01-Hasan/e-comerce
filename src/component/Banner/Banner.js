import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import Banner2 from '../../image/banner2.jpg'
import Banner3 from '../../image/bannner3.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
  
  <Carousel.Item>
  <div className='row banner-two'>
          <div className='col-lg-6'>
          <img
      className="d-block w-100 image"
      src={Banner2}
      alt="First slide"
    />

          </div>
          <div className='col-lg-6'>
          <div className='dispicriton'>
          <h5 className='taitel'>Beauty</h5>
          <h1 className='name'>Super Natural</h1>
          <p className='con-text'>Natural and organic cosmetics are greatly influencing and changing the cosmetics panorama. While “beauty” is still the main term that comes to mind when we think about cosmetic products, an increasing number of consumers expect to find “sustainable”, “environmentally friendly” and “ethical” qualities in the cosmetics they purchase. </p>
          <button className='shop-link'>Shop Naw</button>
          </div>

          </div>

      </div>
    
  </Carousel.Item>
  <Carousel.Item >
  <div className='row banner3'>
          <div className='col-lg-6 '>
          <div className='dispicriton'>
          <h5 className='taitel'>Cosmetic</h5>
          <h1 className='name'>Big Discount</h1>
          <p className='con-text'>Cosmetic beauty serum box and bottle mockup set includes 7 PSD files with organized layers and folders. Includes packaging mockups for the box only at 4 different angles, and 3 with the box including the bottle. Features: • Layered PSD • Easy editable via smart object • </p>
          <button className='shop-link'>Shop Naw</button>
          </div>
          </div>


          <div className='col-lg-6'>
          <img
      className="d-block w-100 image"
      src={Banner3}
      alt="First slide"
    />
        

          </div>

      </div>
   
  </Carousel.Item>
</Carousel>
            
        </div>
    );
};

export default Banner;