import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();


    const onSubmit = data => {
        axios.post('http://localhost:5000/Product',data)
        .then(res => {
            if(res.data.insertedId){
                alert('sussces fully add product')
                reset()
            }
           
        })  
        };
   
    return (
                <div className='container add '>
                <div className='add-fild'>
                <form onSubmit={handleSubmit(onSubmit)} className='input-text'>
                <h3>Add-New Product</h3>
                    <input  type='text'{...register("name")} placeholder="ProductName" className='input-aria' required /> 
                    <textarea  type='text'{...register("discription")} placeholder="discription"className='input-aria' required /> 
                    <input type='number'{...register("price",)} placeholder="price" className='input-aria' required />
                    <input  type='text'{...register("image")} placeholder="image-url" className='input-aria' required /> 
                
                    <input type="submit" />

                    </form>
                </div>
            </div>
    
        

       
    );
};

export default AddProduct;