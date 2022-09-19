import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState("");

  function showWeather(response) {
    setLoaded(true);
    setWeather({
        city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
      }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "2fe0053212ae691bfbd1ef61151dca30";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="search-form"
    onSubmit={handleSearch}>
      <input type="search" placeholder="Type a city" onChange={updateCity} className="searchinput" />
      <input type="submit" value="Search" className="searchButton"  />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
         <ul>
        <div className="row">
    <div className="col-md-6">
          <li className="headCity">{weather.city}</li>
        <li className="sky">
            <img src={weather.icon} alt="weather icon" width="70px"/>
          </li>
          </div>
    <div className="col-md-6">
          <li className="temperature">{Math.round(weather.temperature)}°C</li>
          <div className="weatherInfo">
            <li>Wind: {Math.round(weather.wind)} km/h</li>
          <li>Humidity: {Math.round(weather.humidity)} %</li>
          <li className="Description">{weather.description}</li>
         </div>
          </div>
          </div>
        </ul>
                   </div>
                   );
  } else {
  
    return form;}
  }
    
    
    
   

    