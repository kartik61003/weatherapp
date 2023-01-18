//https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=42f15fe7964663b0f6b20d6445bce593

import React, { useState, useEffect } from 'react'
import "./style.css"
import WeatherCard from './weatherCard'



const Temp = () => {

   const[searchValue,setsearchValue] =useState("Delhi");
   const[tempInfo,settempInfo] =  useState("");
   const getWeatherInfo = async()=>{
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=42f15fe7964663b0f6b20d6445bce593` ;
      const res  = await fetch(url);
      const data = await res.json();
      const{temp,humidity,pressure} = data.main;
      const{main:weathermood} = data.weather[0];
      const{country,sunset,sunrise} = data.sys;
      const {name} = data;
      const{speed} = data.wind;

      

    
      const newweathercard = {
          temp,
          humidity,
          pressure,
          weathermood,
          name,
          country,
          sunset,
          sunrise,
          speed
        }
       settempInfo(newweathercard);

      console.log(data)
    } catch (error) {

      console.log(error)
    }
   }


   useEffect(() => {
     getWeatherInfo() },[])
   

   
  return (
    <>
      <div className='wrap'>
        <div className='search'>
            <input type='search'
                placeholder='search...'
                autoFocus
                id='search'
                className='searchTerm'
                value={searchValue}
                onChange={(e)=>setsearchValue(e.target.value)}
/>
                <div className='searchButton' type='button' onClick={getWeatherInfo}>Search</div>
        </div>
      </div>
      <WeatherCard tempInfo = {tempInfo} />
     
    </>
  )
}

export default Temp
