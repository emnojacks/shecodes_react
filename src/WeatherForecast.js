import React from "react";
import axios from "axios";
import { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  //the only thing being received is a city
  console.log(props);
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  let apiKey = "9c49b3864t10591580bb709ef0f84oa3";
  let units = "imperial";
  const [city, setCity] = useState(props.city);
  //shecodes apiurl
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;

  function handleResponse(res) {
    // console.log(res.data);
    setCity(props.city)
    setForecast(res.data);
    setLoaded(true);
  }

  //     function updateCity() {
  //         console.log(forecast.city)
  //     }
  // //     if (city !== forecast.city) setLoaded(false);
  // //   }

  if (loaded) {
    console.log(forecast);
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
    axios
      .get(apiURL)
      .then(handleResponse)
      .then(console.log("forecast received"));
    return null;
  }
}
