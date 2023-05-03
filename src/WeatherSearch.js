import React from "react";
import { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  let apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
  let units = "imperial";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  function handleSubmit(e) {
    e.preventDefault(e);
    axios.get(apiURL).then(displayWeather);
  }

  function updateCity(e) {
    setCity(e.target.value);
  }

  function displayWeather(res) {
    console.log(res.data);
    setLoaded(true);
    setWeather({
      temperature: res.data.main.temp,
      wind: res.data.wind.speed,
      humidity: res.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
    });
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="enter a city" onChange={updateCity} className="form-input"/>
      <button type="submit" className="form-input">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temp: {Math.round(weather.temperature)}°F</li>
          <li>Wind: {weather.wind} mph</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>
            <img src={weather.icon} alt="Weather" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
