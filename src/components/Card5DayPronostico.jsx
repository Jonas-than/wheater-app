import React, {useState, useEffect} from 'react'

function Card5DayPronostico({city, dailyTemperatures, setDailyTemperatures}) {

  
  //const [dailyTemperatures, setDailyTemperatures] = useState([]);
  
  const KEY = 'e2a81dbb65d9c72db59adbccdf71285e';
  const units = 'metric'

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${KEY}&units=${units}`
      );
      const data = await res.json();
      const groupedData = groupDataByDay(data.list)
      setDailyTemperatures(groupedData);
      console.log('forecast:',dailyTemperatures)
    }
    getData();
  },[city, units])

  const groupDataByDay = (data) => {
    const groupedData = {};

    data.forEach((item)=>{
      const date = new Date(item.dt *1000).toDateString();
      if(!groupedData[date]){
        groupedData[date] = {
          temperatures: [item.main.temp],
          maxTemp: item.main.temp,
          minTemp: item.main.temp,
          icon: item.weather[0].icon};

      }else{
        groupedData[date].temperatures.push(item.main.temp);
        groupedData[date].maxTemp = Math.max(groupedData[date].maxTemp, item.main.temp);
        groupedData[date].minTemp = Math.min(groupedData[date].minTemp, item.main.temp);
      }
    });


    

    return groupedData;
  }

  const nextFiveDays = Object.keys(dailyTemperatures)
  .filter((date, index) => index !== 0)
  .slice(0, 5);

  return (
    <>
    {nextFiveDays.map((date, index)=>(
        <div className='subcontainer-forecast' key={date}>
        <h2>{index === 0 ? 'Tomorrow' : new Date(date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</h2>
        <div><img src={`https://openweathermap.org/img/wn/${dailyTemperatures[date].icon}.png`} alt='' /></div>
        <div className='container-max-min-temp'>
          <span className='temp-max'>{Math.round(dailyTemperatures[date].maxTemp)}°C</span>
          <span className='temp-min'>{Math.round(dailyTemperatures[date].minTemp)}°C</span>
        </div>
        </div>
        ))}
    </>
  )
}

export default Card5DayPronostico