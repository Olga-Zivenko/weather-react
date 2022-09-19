import React from "react";
import Search from "./Search";
import "./App.css";

export default function App() {
    return (
    <div className="App">
      <div className="weatherApp-wrapper">
        <div className="weatherApp">
          <Search />
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
