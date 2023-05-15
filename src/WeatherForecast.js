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
      <div className="container">
        <div className="row">
          <div className="col">
            <WeatherForecastDay forecast={forecast.daily[0]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecast={forecast.daily[1]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecast={forecast.daily[2]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecast={forecast.daily[3]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecast={forecast.daily[4]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecast={forecast.daily[5]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecast={forecast.daily[6]} />
          </div>
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
        alert(`Sorry, ${err.request.statusText} 😭`);
      });
    return null;
  }
}
