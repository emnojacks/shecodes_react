//imports
import React from "react";
import { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";

export default function WeatherSearch() {
  //var declarations
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  //have to have another var to display city with res bc city search input updates value onChange
  const [cityOnScreen, setCityOnScreen] = useState("");
  let apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
  let units = "imperial";
  //full apiURL with city, units, and unique key
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

  //start funcs

  function updateCity(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(e);
    axios.get(apiURL).then(displayWeather);
  }

  //pass the api json res to display weather func and use object deconstruction to set state of weather obj
  function displayWeather(res) {
    console.log(res.data);
    setLoaded(true);
    setCityOnScreen(city);
    setWeather({
      temperature: res.data.main.temp,
      wind: res.data.wind.speed,
      humidity: res.data.main.humidity,
      //u can set icon by incl. icons in media or images folder in src and that might be better way if url or docs change
      icon: `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
      date: new Date(res.data.dt * 1000),
    });
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="enter a city"
        onChange={updateCity}
        className="form-input form-control"
      />
      <button type="submit" className="form-input form-control btn btn-primary">
        Search
      </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <WeatherData weather={weather} cityOnScreen={cityOnScreen} />
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
