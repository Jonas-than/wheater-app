import React from 'react'
import { Sidebar } from 'primereact/sidebar';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";
import useLocation from '../services/useLocation';
import { useState } from 'react';

function Sidebar1({setVisible, visible, setShowData, handleClickCityDefault, handleClickCityDefaultForecast, changeCity, changeCityForecast, city, data}) {
  

  return (
    <Sidebar visible={visible} onHide={()=>setVisible(false)} className="sidebar">
      <form onSubmit={(e)=>{changeCity(e);changeCityForecast(e);setVisible(false)}}>
        <div className="input-btn">
          <div className="card flex flex-wrap justify-content-center input-icon">
            <i className="pi pi-search icon" />
            <InputText placeholder="search location" className="input-search-city" />
          </div>
              
        <Button className="btn-search">Search</Button>
              
        </div>
      </form>
      <div className="container-btn-city">
        <Button className="defaultCity" onClick={(e)=>{handleClickCityDefault(e);setShowData(true);setVisible(false);handleClickCityDefaultForecast(e)}} value='london' >London<KeyboardArrowRightIcon/></Button>
        <Button className="defaultCity" onClick={(e)=>{handleClickCityDefault(e);setShowData(true);setVisible(false);handleClickCityDefaultForecast(e)}} value='barcelona'>Barcelona<KeyboardArrowRightIcon/></Button>
        <Button className="defaultCity" onClick={(e)=>{handleClickCityDefault(e);setShowData(true);setVisible(false);handleClickCityDefaultForecast(e)}} value='long+beach'>Long Beach<KeyboardArrowRightIcon/></Button>
      </div>
            
    </Sidebar>
  )
}

export default Sidebar1