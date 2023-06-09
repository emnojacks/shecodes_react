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

  //start funcs
  function updateCity(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    callWeatherAPI();
  }

  function callWeatherAPI() {
    //shecodes apiurl
    // let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`
    //open weather api
    let apiKey = "311f1f45fee82242ab4086372ab360f5";
    let units = "imperial";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios
      .get(apiURL)
      .then(displayWeather)
      .catch((err) => {
        alert(`Sorry, ${err.request.statusText} 😭`);
      });
  }

  //pass the api json res to display weather func and use object deconstruction to set state of weather obj
  function displayWeather(res) {
    setLoaded(true);
    setCityOnScreen(city);
    setWeather({
      coordinates: res.data.coord,
      temperature: res.data.main.temp,
      wind: res.data.wind.speed,
      humidity: res.data.main.humidity,
      //u can set icon by incl. icons in media or images folder in src and that might be better way if url or docs change
      icon: `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
      date: new Date(res.data.dt * 1000),
      city: res.data.name,
      description: res.data.weather[0].description,
    });
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            id="citySearchBar"
            type="search"
            placeholder="Enter a city"
            className="form-input form-control"
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <button
            type="submit"
            className="form-input form-control btn btn-warning"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="container">
        {form}
        <br />
        <WeatherData weather={weather} cityOnScreen={cityOnScreen} />
        {/* the forecast component will ONLY display if the first city submission and api call is SUCCESS.  so you don't need to asynchronously call the forecast */}
        <br />
        <WeatherForecast
          coordinates={weather.coordinates}
          city={weather.city}
        />
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
