import { useEffect, useState } from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import "./App.css";

function App() {
  const KEY = "e2a81dbb65d9c72db59adbccdf71285e";
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);


  useEffect(() => {
    if(lat === null && long === null) return;

    const getData = async () =>{
      const link= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${KEY}&units=metric`;
      const res = await fetch(link)
      const data = await res.json();
      console.log(data)
      setCurrentWeather(data)
    }
    getData();
  }, [lat, long]);

  const handleSucces = (data) => {
    console.log('tenemos la ubi', data);
    const { latitude, longitude } =data.coords;
    setLat(latitude)
    setLong(longitude);
  }

  const handleError = () => {
    console.log('ubicaion no obtenida')
  }

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(handleSucces,handleError);
  }

  return (
    <main>
      <div id="weather-section">
        <div className="btns-weather">
          <button className="btn-principal btn-search">
            Search for places
          </button>
          <button className="btn-principal geolocation" onClick={handleLocation}>
            <MyLocationIcon />
          </button>
        </div>
        <div className="img-container">
          <div className="img-cloudBg">
            <img src="/public/Cloud-background.png" alt="" />
          </div>
          <div className="img-weather">
            <img src="/public/Clear.png" alt="" />
          </div>
        </div>
        {currentWeather === null ? 'clickea el bto' :
        currentWeather.main.temp}
        
      </div>

      <div>
        <h1>Hola</h1>
      </div>
    </main>
  );
}

export default App;
