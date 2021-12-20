import React from 'react';
import './Regester.css'
import UseAuth from '../../Hooks/UseAuth';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';



const Regester = () => {
    const{regester,user}=UseAuth()
    console.log(user)
    const { register, handleSubmit,reset } = useForm();
     const onSubmit = data => {
    regester (data.email,data.password)
   
    //   console.log(data.name)
      reset()
    };
    return (
        <div >
            <div >
            <form onSubmit={handleSubmit(onSubmit)} className='regester-fild'>
             <p className='regester-text'>Name</p>
            <input {...register("name")} type='text' placeholder='Enter Your Name' required  className='input-fild' /> <br />
            <p className='regester-text'>Email</p>
            <input {...register("email") } type='email'  placeholder='Enter Your Email' required className='input-fild' /> <br />
            <p className='regester-text'>password</p>
            <input {...register("password")} type='password'  placeholder='Enter Your Password' required className='input-fild'/> <br />
     
      <input type="submit" value='Regester' className='regester-btn' />
      <p className='tag-link'>Are you Regester!Plase Login <NavLink to='/login'>Login</NavLink> </p>
            </form>
            </div>
        
            
        </div>
    );
};

export default Regester;