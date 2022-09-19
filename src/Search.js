import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
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
    <form onSubmit={handleSearch}>
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
            <li className="headcity">${city}</li>
            <li className="description">{weather.description}</li>
        </ul>
          <div className="row">
            <div className="col-6">
              <div className="sky">
              <img src={weather.icon} alt="Weather icon" width="42" />
                  <span className="float-left">
                  <span className="temperature">{Math.round(weather.temperature)}</span>
                  <span className="units">°C</span>
                </span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {Math.round(weather.wind)} km/h</li>
              </ul>
            </div>
          </div>
          </div>
                   );
  } else {
    return form;
  }
}
