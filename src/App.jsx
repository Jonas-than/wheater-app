import { useEffect, useState } from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import useLocation from './services/useLocation'

import LocationOnIcon from '@mui/icons-material/LocationOn';     
import "./App.css";
import { Button } from "primereact/button";
import CardDetailsWeather from "./components/CardDetailsWeather";
import Card5DayPronostico from "./components/Card5DayPronostico";
import Sidebar1 from "./components/Sidebar";
import ImgWeather from "./components/ImgWeather";

function App() {
  const {currentWeather, handleLocation, data} = useLocation()
  
  
  const [visible, setVisible] = useState(false)

  return (
    <main>
      <div className="weather-section">
        <div className="btns-weather">
          <div className="card flex justify-content-center">
          <Sidebar1 setVisible={setVisible} visible={visible}/>
          <button className="btn-principal btn-search-places" onClick={()=>setVisible(true)}>
            Search for places
          </button>
          </div>
          <button className="btn-principal geolocation" onClick={handleLocation}>
            <MyLocationIcon />
          </button>
        </div>

        <ImgWeather />

        {currentWeather === null ? '' :
        <div className="container-weatherTitle">
        <h1 className="weather-title">{Math.round(currentWeather?.main.temp)}</h1> 
        <h2 className="grades-title">°C</h2>
        </div>
        }
        <div className="weather-name">
          {currentWeather === null ? '':
          <div className="container-name">
            <h1>{currentWeather?.weather[0].main}</h1>
          </div>
          }
        </div>
        <div className="date-container">
          <span>Today &nbsp; · &nbsp; </span>
          <span>Fri 5 Jun</span>
        </div>
        <div className="location-icon">
          <div><LocationOnIcon/></div><div>{currentWeather?.name}</div>
        </div>
        
      </div>

      <div className="details-section">
        <div id="details-section-content">
        <div>
          <Button>°C</Button>
          <Button>°F</Button>
        </div>
        <div>
          {console.log('la data es:',data)}
          <Card5DayPronostico />
        </div>

        <div className="title-details">
          <h1>Today's Highlights</h1>
        </div>
          <CardDetailsWeather currentWeather={currentWeather}/>
        </div>
      </div>
    </main>
  );
}

export default App;
