import React from "react";
import DateFormatted from "./DateFormatted";
import TempUnitConversion from "./TempUnitConversion";

export default function WeatherData(props) {
  return (
    <div>
      <h2>{props.cityOnScreen}</h2>
      <DateFormatted date={props.weather.date} />
      <ul>
        <li>Temp: {Math.round(props.weather.temperature)}°F</li>
        <li>Wind: {props.weather.wind} mph</li>
        <li>Humidity: {props.weather.humidity}%</li>
        <li>
          <img src={props.weather.icon} alt="Weather" />
        </li>
      </ul>
    </div>
  );
}
