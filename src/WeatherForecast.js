import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  //the only thing being received is a city
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(res) {
    setForecast(res.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast-container">
        <div className="row">
          <WeatherForecastDay forecast={forecast.daily[0]} />
          <WeatherForecastDay forecast={forecast.daily[1]} />
          <WeatherForecastDay forecast={forecast.daily[2]} />
          <WeatherForecastDay forecast={forecast.daily[3]} />
          <WeatherForecastDay forecast={forecast.daily[4]} />
          <WeatherForecastDay forecast={forecast.daily[5]} />
          <WeatherForecastDay forecast={forecast.daily[6]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
    let units = "imperial";
    let city = props.city;
    //shecodes apiurl
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;
    axios
      .get(apiURL)
      .then(handleResponse)
      .catch((err) => {
        alert(err.request.statusText);
      });
    return null;
  }
}
