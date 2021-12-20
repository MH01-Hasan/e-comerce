import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { addToCart } from '../../Redux/cardSlics';
import './Details.css'

const Details = () => {
    const {id}=useParams()
    const[data,setData]=useState({})
    console.log(data)

    useEffect(()=>{
        fetch(`https://secure-island-42519.herokuapp.com/Product/${id}`)
        .then(res => res.json())
        .then(data => setData(data))
    },[])


    const dispatch = useDispatch()
    const history = useHistory()
    const handeladdToCard = (data) => {
        dispatch(addToCart(data))
        history.push("/cart")

    }

    if(!data.image){
        return <p className='lodding'>Lodding................</p>

    }

    return (
        <div className='container'>
            <div className='row mt-5 mb-5'>
                <div className='col-lg-6 col-sm-12'>
                <Card.Img  src={data.image} />

                </div>

                <div className='col-lg-6 col-sm-12'>
                    <h1 className='details-name'>{data.name}</h1>
                    <small className='discription'>{data.discription}</small>
                   <p className='price-details'>{`price: $${data.price}`}</p>

                   <button onClick={()=>handeladdToCard(data)} className='details-add-to'>add to cart</button>

                </div>

            </div>
            
            
            
        </div>
    );
};

export default Details;