import axios from 'axios';
import React from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { crealecart } from '../../Redux/cardSlics';
import './Order.css'

const Order = () => {
    const cart = useSelector((state)=>state.cart);
    console.log(cart)

    const dispatch = useDispatch()
    const history = useHistory()



    const { register, handleSubmit,reset, formState: { errors },} = useForm(); 
    
  
    const handelcart = (cart)=>{
        axios.post('https://secure-island-42519.herokuapp.com/order',cart)
        .then(res => {
            dispatch(crealecart())
            

    })}

    const onSubmit = (data) => {
        axios.post('https://secure-island-42519.herokuapp.com/order',data)
        .then(res => {
            if(res.data.insertedId){
                dispatch(crealecart())
                reset()
                history.push("/")
            } 
           
        })      
        };

   

  
       
       
    return (
        <div className='mx-3 container mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    {

                    <Table striped bordered hover>
                        
                    <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                        {
                        cart.cardItem?.map(item =><tr >
                            
                            <td></td>
                            <td> <img src={item.image} alt="" className='cart-image order-image' /> <br />
                            <small>{item.name}</small>
                            </td>
                            <td>{item.price}</td>
                            <td>{item.cartQuantity}</td>
                            <td>{item.cartQuantity*item.price}</td>
                        </tr>

                            )   
                        }
                    <tr>
                        <td>3</td>
                        <td colSpan={3}>sub Total</td>
                        <td> ${cart.cardTotalAmount}</td>
                    </tr>
                    </tbody>
                    </Table>
                    }
                 
                    <button  onClick={()=>handelcart(cart)} className='chk-out'> submit</button>

                  
                </div>
                <div className='col-lg-6 col-sm-12'>
               

                   
                       

                  

                </div>






         </div>
  
        </div>
    );
};

export default Order;