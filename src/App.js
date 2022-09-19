import React from "react";
import "./App.css";

export default function App() {
  let weatherData = {
    city: "Kyiv",
    temperature: 30,
    date: "Monday, 21:36",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 50,
    wind: 4
  };
  return (
    <div className="App">
      <div className="weatherApp-wrapper">
        <div className="weatherApp">
          <form className="search-form">
            <div className="row">
              <div className="col-5">
                <input
                  className="currentcity"
                  type="search"
                  placeholder="Enter a city"
                  autoComplete="off"
                />
              </div>
              <div className="col-2">
                <input
                  className="searchButtom w-100"
                  type="submit"
                  value="Search"
                />
              </div>
              <div className="col-2">
                <button className="currentButton w-100">Current</button>
              </div>
            </div>
          </form>
          <div className="overview">
            <div className="headCity">{weatherData.city}</div>
            <ul>
              <li>Last updated: {weatherData.date} </li>
              <li></li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="sky">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt={weatherData.description}
                  width="42"
                />
                <span className="float-left">
                  <span className="temperature">{weatherData.temperature}</span>
                  <span className="units">°C</span>
                </span>
              </div>
            </div>

            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} m/s</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row"></div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

        <small>
          <a
            href="https://github.com/Olga-Zivenko/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub open-code
          </a>
          by Olga Zivenko
        </small>
      </div>
    </div>
  );
}
