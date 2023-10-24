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
  const [isButton1Active, setIsButton1Active] = useState(false);
  const [isButton2Active, setIsButton2Active] = useState(false);

  const handleButton1Click = () => {
    setIsButton1Active(true);
    setIsButton2Active(false);
  };

  const handleButton2Click = () => {
    setIsButton1Active(false);
    setIsButton2Active(true);
  };
  
  const {currentWeather, handleLocation, data, city, setCity, changeCityForecast, handleClickCityDefault, changeCity, handleClickCityDefaultForecast, setCurrenWeather, unit, setUnit, lat, long} = useLocation()
  const [showData, setShowData] = useState(true)
  const [dailyTemperatures, setDailyTemperatures] = useState([]);
  const today = new Date();

  const options = { weekday: 'short', month: 'short', day: 'numeric'}
  const formattedDate = today.toLocaleDateString('en-US', options)
  
  
  const [visible, setVisible] = useState(false)

  // useEffect(()=>{
  //   if(data || currentWeather){
  //     setShowData(true)
  //   }
  // }, [data, currentWeather])

  return (
    <main>
      <div className="weather-section">
        <div className="btns-weather">
          <div className="card flex justify-content-center">
          <Sidebar1 setVisible={setVisible} visible={visible} showData={showData} setShowData={setShowData} city={city} setCity={setCity} 
          changeCityForecast={changeCityForecast} changeCity={changeCity} handleClickCityDefault={handleClickCityDefault}
          handleClickCityDefaultForecast={handleClickCityDefaultForecast} data={data}
          />
          <button className="btn-principal btn-search-places" onClick={()=>setVisible(true)}>
            Search for places
          </button>
          </div>
          <button className="btn-principal geolocation" onClick={(e) => { handleLocation();
            setShowData(false); handleClickCityDefaultForecast(e)
          }}>
            <MyLocationIcon />
          </button>
        </div>

        <ImgWeather data={data} dailyTemperatures={dailyTemperatures}/>

        {showData ? ( 
          data ? ( 
        <div className="container-weatherTitle">
        <h1 className="weather-title">{Math.round(data.main?.temp)}</h1> 
        <h2 className="grades-title">°C</h2>
        </div>
          ) : null
        ) : (  
          currentWeather ? ( 
        <div className="container-weatherTitle">
        <h1 className="weather-title">{Math.round(currentWeather.main?.temp)}</h1> 
        <h2 className="grades-title">°C</h2>
        </div>
          ) : null
        )}
        <div className="weather-name">
          {showData ? (
            <div className="container-name">
            <h1>{data?.weather[0].main}</h1>
          </div>
          ):(
          <div className="container-name">
            <h1>{currentWeather?.weather[0].main}</h1>
          </div>
          )
          }
        </div>
        <div className="date-container">
          <span>Today &nbsp; · &nbsp; </span>
          <span>{formattedDate}</span>
        </div>
        <div className="location-icon">
          {showData ? (
            <>
            <div><LocationOnIcon/></div><div>{data?.name}</div>
            </>
           ):(
            <>
             <div><LocationOnIcon/></div><div>{currentWeather?.name}</div>
             </>
          )}
         
        </div>
        
      </div>

      <div className="details-section">
        <div id="details-section-content">
        <div className="btns-grades-container">
          <Button 
          className={isButton1Active ? 'active-button' : 'normal-button'} onClick={()=>{handleButton1Click(); setUnit('metric')}}>°C</Button>
          <Button 
          className={isButton2Active ? 'active-button' : 'normal-button'} onClick={()=>{handleButton2Click(); setUnit('imperial')}}>°F</Button>
        </div>

        <div className="container-forecast">
          <Card5DayPronostico city={city} dailyTemperatures={dailyTemperatures} setDailyTemperatures={setDailyTemperatures}/>
        </div>

        <div className="title-details">
          <h1>Today's Highlights</h1>
        </div>
          <CardDetailsWeather currentWeather={currentWeather} data={data} showData={showData} setCurrentWeather={setCurrenWeather} lat={lat} long={long}/>
        </div>
      </div>
    </main>
  );
}

export default App;
