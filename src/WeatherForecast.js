import React from "react";
import axios from "axios";
import { useState } from "react";

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
            <img
              src={forecast.daily[0].condition.icon_url}
              alt={forecast.daily[0].condition.icon}
            />
            {forecast.daily[0].temperature.minimum}°|
            {forecast.daily[0].temperature.minimum}°
          </div>
          <div className="col-2 day-3">Thu Icon 18|24</div>
          <div className="col-2 day-4">Thu Icon 18|24</div>
          <div className="col-2 day-5">Thu Icon 18|24</div>
          <div className="col-2 day-6">Thu Icon 18|24</div>
          <div className="col-2 day-7">Thu Icon 18|24</div>
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
