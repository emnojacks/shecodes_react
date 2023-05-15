//imports
import React from "react";
import { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";

export default function WeatherSearch() {
  //var declarations
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  //have to have another var to display city with res bc city search input updates value onChange
  const [cityOnScreen, setCityOnScreen] = useState("");
  //open weather key
  // let apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
  //shecodes apikey
  let apiKey = "cf61231c3388f198372145b0edb72254";
  let units = "imperial";
  //shecodes apiurl
  // let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`
  //open weather api
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

  //start funcs

  function updateCity(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
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
        id="citySearchBar"
        type="search"
        placeholder="enter a city"
        className="form-input form-control"
        onChange={updateCity}
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
        {/* the forecast component will ONLY display if the first city submission and api call is SUCCESS.  so you don't need to asynchronously call the forecast */}
        <WeatherForecast city={city} />
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
