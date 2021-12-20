import React from 'react';
import './Login.css'
import { useForm } from "react-hook-form";
import UseAuth from '../../Hooks/UseAuth';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const{login,user}=UseAuth()
    const { register, handleSubmit,reset } = useForm();
     const onSubmit = data => {
        
        login(data.email,data.password)
         console.log(data)
        
        
      reset()
    };
    return (
  
             <div >
            <div >
           <form onSubmit={handleSubmit(onSubmit)} className='regester-fild'>  
            <p className='regester-text'>Email</p>
            <input {...register("email") } type='email'  placeholder='Enter Your Email' required className='input-fild' /> <br />
            <p className='regester-text'>password</p>
            <input {...register("password")} type='password'  placeholder='Enter Your Password' required className='input-fild'/> <br />
            <input type="submit" value='Login' className='regester-btn' />
            <p className='tag-link'>Do Not Regester! Plase Regester <NavLink to='/regester'>regester</NavLink> </p>
           
            </form>
            
            </div>
        
            
        </div>
            
      
    );
};

export default Login;