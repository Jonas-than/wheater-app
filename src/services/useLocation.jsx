import { useState, useEffect } from "react";

function useLocation(){
  const KEY = "e2a81dbb65d9c72db59adbccdf71285e";
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [city, setCity] = useState(null)
  const [unit, setUnit] = useState('metric')
  const [data, setData] = useState(null)

  const getData = async (url, setState) =>{
    const res = await fetch(url)
    if(res.ok){ 
    const datos = await res.json()
    console.log('Datos de la API:', datos)
    setState(datos)
    }else{ 
    console.log('Error en la solicitud de API')
    }
  }

    useEffect(() =>{
      if(city){
        getData(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`, setData)
      }
      },[city])

//probando conseguir pronostico con latitud y longitud
    
      const getLocationWeather = () => { 
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const {latitude, longitude} = position.coords;
            getWeatherByCoordinates(latitude, longitude);
          },
          (error) => {
            console.error('Error al obtener la ubicacion:', error)
          }
        )
      }
    
      useEffect(()=>{
        getLocationWeather();
      }, [])
    
//probando conseguir pronostico con latitud y longitud



  useEffect(() => {
    if(lat === null && long === null) return;

    getData(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${KEY}&units=${unit}`,setCurrentWeather);
    console.log('Ubicacion obtenida:', lat,long);
  }, [lat, long]);

  const handleSucces = (position) => {
    const { latitude, longitude } = position.coords;
    setLat(latitude)
    setLong(longitude);
    getWeatherByLocation(lat, long);
  }

  const handleError = () => {
    console.log('ubicacion no obtenida')
  }

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(handleSucces,handleError);
  }



  const handleClickCityDefault = (e) => {
    setCity(e.target.value)
  }

  const changeCity = (e) => {
    e.preventDefault()
    setCity(e.target[0].value)
  }

  const handleClickCityDefaultForecast = (e) => {
    setCity(e.target.value)
  }

  const changeCityForecast = (e) => {
    e.preventDefault();
    setCity(e.target[0].value)
  }


 

  return {currentWeather, handleLocation, city, changeCity, data, handleClickCityDefault, handleClickCityDefaultForecast, changeCityForecast, setCity, setCurrentWeather, unit, setUnit, lat, long}
}

export default useLocation