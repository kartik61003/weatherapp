import React, { useEffect, useState } from 'react'

const WeatherCard = ({tempInfo}) => {

    const[WeatherMood,setWeatherMood] = useState("");

    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        country,
        sunset,
        sunrise,
        speed

      } = tempInfo;

      let sec = sunset;
      let date = new Date(sec*1000);
      let timeStr = `${date.getHours()}:${date.getMinutes()}`

      let secs = sunrise;
      let dates = new Date(secs*1000);
      let timeStrs = `${dates.getHours()}:${dates.getMinutes()}`

      useEffect(() => {
        if(weathermood){
            switch (weathermood) {

                    case "Haze":
                    setWeatherMood("haze")
                    break;
                
                    case "Clear":
                    setWeatherMood("sunny")
                        break;
                        
                    case "Smoke":
                    setWeatherMood("haze")
                    break;

                    case "Clouds":
                    setWeatherMood("cloudy")
                    break;
                   
                default:
                    setWeatherMood("sunny")
                    break;
            }
        }
      }, [weathermood]);
      

  return (
    <>
       <article className='widget'>
        <div className='weatherIcon'>
          <i className={`wi wi-day-${WeatherMood}`}></i>
        </div>
        <div className='weatherInfo'>
          <div className='temperature'>
            <span>{temp}°</span> 
          </div>
          <div className='description'>
            <div className='weatherCondition'> {weathermood}
            </div>
            <div className='place'>{name},{country}</div>
          </div>
        </div>
        <div className='date'>{new Date().toLocaleDateString()}</div>

        <div className='extra-temp'>
          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <p>
                <i className='wi wi-sunset'> </i></p>
                  <p className="extra-info-leftside">
                    {timeStr}<br/>
                    sunset
                 </p>
            </div>

            <div className='two-sided-section'>
              <p>
                <i className='wi wi-humidity'> </i></p>
                  <p className="extra-info-leftside">
                    humidity<br/>
                    {humidity}
              </p>
            </div>
          </div>
          <div className="weather-extra-info">

          <div className='two-sided-section'>
              <p>
                <i className='wi wi-windy'> </i></p>
                  <p className="extra-info-leftside">
                    {speed} km/hr<br/>
{                    pressure/1000} bar             </p>
            </div>
            <div className='two-sided-section'>
              <p>
                <i className='wi wi-sunrise'> </i></p>
                  <p className="extra-info-leftside">
                    {timeStrs}<br/>
sunsrise              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default WeatherCard
