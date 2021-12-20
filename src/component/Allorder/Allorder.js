import React, { useEffect, useState } from 'react';
import './Allorder.css'

const Allorder = () => {
    const [data ,setData]=useState([])
  
 
    useEffect(()=>{
        fetch('https://secure-island-42519.herokuapp.com/order')
        .then(res => res.json())
        .then(data =>setData(data))
    },[])

    data.map(cart=>console.log(cart))
    return (
        <div>
             <h1>data lengtj{data.length}</h1>
           {
               data.map(cart=><div>
                  
                   <p>{cart.cardTotalAmount}</p>
                  
               </div>)
           }
               
               
            


        </div>
    );
};

export default Allorder;