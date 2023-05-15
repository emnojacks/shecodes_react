import React from "react";
import axios from "axios";
import { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  //use state vars
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  //shecodes apikey

  function handleResponse(res) {
    // console.log(res.data);
    setForecast(res.data);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="forecast-container">
        <div className="row">
          <div className="col-2 day-2">
            <WeatherForecastDay forecast={forecast.daily[0]} />
            <WeatherForecastDay forecast={forecast.daily[1]} />
            <WeatherForecastDay forecast={forecast.daily[2]} />
            <WeatherForecastDay forecast={forecast.daily[3]} />
            <WeatherForecastDay forecast={forecast.daily[4]} />
            <WeatherForecastDay forecast={forecast.daily[5]} />
            <WeatherForecastDay forecast={forecast.daily[6]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "9c49b3864t10591580bb709ef0f84oa3";
    let units = "imperial";
    let city = props.city;
    //shecodes apiurl
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;

    axios
      .get(apiURL)
      .then(handleResponse)
      .then(console.log("forecast received"));
    return null;
  }
}
