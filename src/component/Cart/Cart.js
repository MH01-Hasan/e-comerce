import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart,decreasecart,increasetocart,crealecart, getTotals } from '../../Redux/cardSlics';
import './Cart.css'


const Cart = () => {
    const cart = useSelector((state)=>state.cart);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getTotals())
  },[cart,dispatch])
  //remove cart//
    const handelremovecart = (cartItem)=>{
      dispatch(removeFromCart(cartItem))
      console.log(cartItem)

    }
 //remove cart//

   const handeldicresstocart =(cartItem)=>{
    dispatch(decreasecart(cartItem))
   };
   const handelincreasetocart =(cartItem)=>{
    dispatch(increasetocart(cartItem))
   };
   const handelcrealecart =()=>{
    dispatch(crealecart())
   };
    
    return (
        <div>
          <h1 className='shoping'>Shopinng Cart</h1>
          {
  cart.cardItem.length === 0 ?(
    <div className="cart-empty">
                <p>Your cart is currently empty</p>
                <div className="start-shopping">
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                    <span>Start Shopping</span>
                  </Link>
                </div>
   </div>
  ):(
                 
   <div className='container'>
   <div className="taitel ">
                          <h4 className="product">Product </h4>
                          <h4 className="price">Price </h4>
                          <h4 className="quantity">Quantity </h4>
                          <h4 className="Total">Total </h4>
  </div>
                 
  <div className='cart-item'>
    {
    cart.cardItem?.map(cartItem=><div key={cartItem._id} className='cart-inder row'>
                              
    <hr className='mt-3'/>
     <div className="cart d-flex col-lg-4">
    <img src={cartItem.image} alt="" className='cart-image' />
      <div className="pro-name">
      <p className='card-name'>{cartItem.name}</p>
      <button onClick={()=>handelremovecart(cartItem)} className='remove' >Remobe</button>
    </div>
 </div>
                               
   <div className='father col-lg-8 '>


  <div className="child1 ">${cartItem.price}</div>
  <div className="child2 ">
    <button className='in-batton' onClick={()=>handeldicresstocart(cartItem)}>-</button>
    <div className="count">{cartItem.cartQuantity}</div>
      <button className='in-batton' onClick={()=>handelincreasetocart(cartItem)}>+</button>
      </div>
   <div className="child3 ">
       ${cartItem.price * cartItem.cartQuantity}
   </div>
 </div>
</div>

      )
    }
 </div>

   <div className="cart-sumany mt-5">
      <div className="clear-cart">
       <button onClick={()=>handelcrealecart()} className='clear'>Clear -Cart</button>
  </div>

 <div className="cart-checkout">
  <div className="subtotal">
   <span className='total'>SubTotal</span>
     <span className="amount">
             ${cart.cardTotalAmount}
            </span>
  </div>
   <p>Taxes and shipping calculated at checkout</p>
   <Link to ='/order'>
   <button className='chk-out' >Check out</button>
   </Link>
   
       <div className="continue-shopping">
      <Link to="/">
        <svg
     xmlns="http://www.w3.org/2000/svg"
        width="20"
     height="20"
       fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
      >
        <path
       fillRule="evenodd"
         d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
               />
            </svg>
     <span>Continue Shopping</span>
   </Link>
    </div>
 </div>

  </div>

   </div>
                 
  )
  }
 </div>
    );
};

export default Cart;