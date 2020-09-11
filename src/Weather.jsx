import React, { Component } from 'react';

const Weather=props=>{
    return(
        <>
        {props.temp && 
        <div className="weather__info" >
            <span className="info first">My City: {props.name}</span>
            <span className='info'>Temperature: {props.temp}</span>
            <span  className='info'>Feels Like: {props.feels_like}</span>
        </div>
        }
        </>
    )
}


export default Weather

