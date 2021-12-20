import React from 'react';
import'./Product.css'


import { useSelector } from 'react-redux';
import { Button, Card, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cardSlics';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Product = () => {
    const { items: products, status } = useSelector((state) => state.products);
  
    const dispatch = useDispatch()
    const history = useHistory()
    const handeladdToCard = (product) => {
        dispatch(addToCart(product))
        history.push("/cart")

    }
    if(status==='pending'){
        return  <Button variant="primary" disabled className='spniers-btn'>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    }
    return (
        <div className="home-container">
          <div className='product-text'>
            <p className='the'>THE LATEST</p>
            <h2 className='about'>Fabulous Products</h2>
          </div>
       
           <div className='row mx-3 mb-5'>
            
           {
             products.map(product=><div className='col-lg-3 col-sm-12' key={product._id}>
               
               <Card className='cart-fild mt-5'>
                <Card.Img  src={product.image} className='image-card'/>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                  <div className='add-footer'>
                  <button  onClick={()=>handeladdToCard(product)} className='add-bbtn'><i class="fas fa-cart-plus icon"></i></button>
                    <small>
                  <Link to ={`/order/${product._id}`}>
                 <i class="fas fa-eye icon-a "></i>
                  
                 </Link>
                </small>
                <small className='price-card'>   ${product.price}</small>
                  </div>
                 </Card.Body>
               
                </Card>
             </div>)  
             
            }
           </div>

           <button className='view-all mb-5'>VIEW ALL</button> 
    
      </div>
    );
};

export default Product;