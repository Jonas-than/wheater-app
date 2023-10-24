
import React, { useState } from 'react'

function CardDetailsWeather({currentWeather, data, showData}) {
  const humidity = data?.main?.humidity || currentWeather?.main?.humidity;
  const porcentaje = typeof humidity === 'number' ? humidity : 0;
 
console.log('Valor de porcentaje:', porcentaje);

  return (
    <div className='container-cards-details'>
      <div className='container-card-details'>
        <h3>Wind status</h3>
        <div className='content-card'>
          <h1>{showData ? data?.wind.speed : currentWeather?.wind.speed} </h1><h2> &nbsp;mph</h2></div>
        <div className='icon-direction'>
          <h4>WSW</h4>
        </div>
      </div>

      <div className='container-card-details'>
         <h3>Humidity</h3>
         <div className='content-card'>
         <h1>{showData ? data?.main.humidity : currentWeather?.main.humidity}&nbsp;</h1><h2>%</h2></div>
          <div className='container-porcentage'>
         <div className='container-bar'>
          <div>0</div><div>50</div><div>100</div>
          </div>
         <div className="bar">
          <div className='porcentage' style={{width:`${porcentaje}%`}}></div>
        </div>
        <div className='sign-porcentage'>
          %
        </div>
        </div>
      </div>

      <div className='container-card-details'>
        <h3>Visibility</h3>
        <div className='content-card'><h1>{showData ? data?.visibility : currentWeather?.visibility} </h1><h2> &nbsp;miles</h2></div>
      </div>

      <div className='container-card-details'>
        <h3>Air Pressure</h3>
        <div className='content-card'><h1>{showData ? data?.main.pressure : currentWeather?.main.pressure} </h1><h2> &nbsp;mb</h2></div>
      </div>

    </div>
  )
}

export default CardDetailsWeather