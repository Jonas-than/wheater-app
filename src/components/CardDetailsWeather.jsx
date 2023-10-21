import React from 'react'

function CardDetailsWeather({currentWeather}) {
  return (
    <div className='container-cards-details'>
      <div className='container-card-details'>
        <h3>Wind status</h3>
        <div className='content-card'><h1>{currentWeather?.wind.speed}</h1><h2>mph</h2></div>
      </div>

      <div className='container-card-details'>
         <h3>Humidity</h3>
         <h1>{currentWeather?.main.humidity}%</h1>
         <div className="w-full bg-gray-200">
        <div className="bg-blue-500 h-2 w-1/2"></div>
        </div>
      </div>

      <div className='container-card-details'>
        <h3>Visibility</h3>
        <div className='content-card'><h1>{currentWeather?.visibility}</h1><h2>miles</h2></div>
      </div>

      <div className='container-card-details'>
        <h3>Air Pressure</h3>
        <div className='content-card'><h1>{currentWeather?.main.pressure}</h1><h2>mb</h2></div>
      </div>

    </div>
  )
}

export default CardDetailsWeather