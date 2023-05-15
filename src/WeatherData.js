import React from "react";
import DateFormatted from "./DateFormatted";
import TempUnitConversion from "./TempUnitConversion";

export default function WeatherData(props) {
  return (
    <div className="container current-weather">
      <h2 className="city-on-screen">{props.cityOnScreen}</h2>
      <h2>
        <DateFormatted date={props.weather.date} />
      </h2>
      <h2>
        Temp:{" "}
        <TempUnitConversion
          temperature={Math.round(props.weather.temperature)}
        />
      </h2>
      <h3>Wind: {props.weather.wind} mph</h3>
      <h3>Humidity: {props.weather.humidity}%</h3>
      <h3>
        <img src={props.weather.icon} alt={props.weather.description} />
      </h3>
    </div>
  );
}
