import React, { useState, useEffect } from 'react'

function ImgWeather({data, dailyTemperatures}) {
  const [weather, setWeather] = useState({});
  const [weatherImage, setWeatherImage] = useState(null)
  const [date, setDate] = useState('2023-10-25');

  const weatherImages = {
    '01d': './public/Clear.png',
    '02d': './public/LightCloud.png',
    '03d': './public/HeavyCloud.png',
    '04d': './public/Sleet.png',
    '09d': './public/Hail.png',
    '10d': './public/LightRain.png',
    '11d': './public/Thunderstorm.png',
    '13d': './public/Snow.png',
    '50d': './public/HeavyCloud.png'
  }
    
      const icon = dailyTemperatures.icon;
      const imageSrc = weatherImages[icon] || './public/Clear.png'


  return (
    <div className="img-container">
        <div className="img-cloudBg">
            <img src="/Cloud-background.png" alt="" />
        </div>
        <div className='img-weather'>
          <img src={imageSrc} alt="" />
        </div>   
    </div>
  )
}

export default ImgWeather