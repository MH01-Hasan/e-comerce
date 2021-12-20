import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './SetTimer.css'

const SetTimer = () => {

    const [timerDays ,setTimerDays] = useState();
    const [timerHours ,setTimerHours] = useState();
    const [timerMinutes ,setTimerMinutes] = useState();
    const [timerSeconds ,setTimerSeconds] = useState();

    let interval;

    const settimers=()=>{
        const conuntdwndata = new Date('Jan 31,2022').getTime();

       interval = setInterval(() =>{
          const now = new Date().getTime();
          const distance = conuntdwndata - now;

          const Days = Math.floor(distance / (24*60*60*1000));

          const Hours = Math.floor(
              (distance % (24*60*60*1000)) / (1000 * 60 * 60)
              );

          const Minutes = Math.floor(
              (distance % (60*60*1000)) / (1000*60)
              );
          const Seconds = Math.floor(
              (distance % (60*1000)) / (1000)
              );


          if(distance<0){
             clearInterval(interval.current)
          }else{

            setTimerDays(Days)
            setTimerHours(Hours)
            setTimerMinutes(Minutes)
            setTimerSeconds(Seconds)
          }

          
         

        });

    };
  useEffect(()=>{
    settimers()
  },[])
    return (
        <div className='set-time-fild'>
            <div className='row mx-5 ' >
                <div className='col-lg-6 col-sm-12 mt-5 mb-5'>
                <h1 className='about'>Best Deal Of the Day</h1>
                <p className='about-p'>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy</p>
                 <div className='time'> 
                   <h4 className='day'>{timerDays} <p className='day-time'>Days</p> </h4>
                   <h4 className='day'>{timerHours} <p className='day-time'>Hours</p>  </h4>
                   <h4 className='day'>{timerMinutes} <p className='day-time'>Minutes</p> </h4>
                   <h4 className='day'>{timerSeconds}<p className='day-time'>Seconds</p> </h4>
                 </div>
                   

                </div>
                <div className='col-lg-6 col-sm-12 mt-5 mb-5' >
                <Card.Img  src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/countdownbanner.png?v=1610090122" className='settime-image'/>

                </div>

            </div>
            
        </div>
        
    );
};

export default SetTimer;