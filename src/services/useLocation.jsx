import { useState, useEffect } from "react";

function useLocation(){
  const KEY = "e2a81dbb65d9c72db59adbccdf71285e";
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  const [city, setCity] = useState('')
  const [data, setData] = useState(null)

  const getData = async (url, setState) =>{
    const res = await fetch(url)
    const datos = await res.json()
    setState(datos)
  }

    useEffect(() =>{
        getData(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`, setData)
    },[city])



  useEffect(() => {
    if(lat === null && long === null) return;

    getData(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${KEY}&units=metric`,setCurrentWeather);
    
  }, [lat, long]);

  const handleSucces = (data) => {
    console.log('tenemos la ubi current weather', data);
    const { latitude, longitude } = data.coords;
    setLat(latitude)
    setLong(longitude);
  }

  const handleError = () => {
    console.log('ubicacion no obtenida')
  }

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(handleSucces,handleError);
  }



  const handleClickCityDefault = (e) => {
    console.log(data)
    setCity(e.target.value)
  }

  const changeCity = (e) => {
    e.preventDefault();
    setCity(e.target[0].value)
  }

 

  return {currentWeather, handleLocation, city, changeCity, data, handleClickCityDefault}
}

export default useLocation