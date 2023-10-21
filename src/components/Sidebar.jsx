import React from 'react'
import { Sidebar } from 'primereact/sidebar';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";
import useLocation from '../services/useLocation';
import { useState } from 'react';

function Sidebar1({setVisible, visible}) {
  const {handleClickCityDefault, changeCity} = useLocation()

  

  return (
    <Sidebar visible={visible} onHide={()=>setVisible(false)} className="sidebar">
      <form onSubmit={changeCity}>
        <div className="input-btn">
          <div className="card flex flex-wrap justify-content-center input-icon">
            <i className="pi pi-search icon" />
            <InputText placeholder="search location" className="input-search-city" />
          </div>
              
        <Button className="btn-search">Search</Button>
              
        </div>
      </form>
      <div className="container-btn-city">
        <Button className="defaultCity" onClick={handleClickCityDefault} value='london' >London<KeyboardArrowRightIcon/></Button>
        <Button className="defaultCity" onClick={handleClickCityDefault} value='barcelona'>Barcelona<KeyboardArrowRightIcon/></Button>
        <Button className="defaultCity" onClick={handleClickCityDefault} value='long+beach'>Long Beach<KeyboardArrowRightIcon/></Button>
      </div>
            
    </Sidebar>
  )
}

export default Sidebar1