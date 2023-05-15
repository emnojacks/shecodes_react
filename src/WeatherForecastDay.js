import React from "react";
import ForecastDayFormatted from "./ForecastDayFormatted";

export default function WeatherForecastDay(props) {
  if (props) {
    return (
      <div>
        <ForecastDayFormatted date={new Date(props.forecast.time * 1000)} />
        <img
          src={props.forecast.condition.icon_url}
          alt={props.forecast.condition.icon}
        />
        {Math.round(props.forecast.temperature.minimum)}°|
        {Math.round(props.forecast.temperature.maximum)}°
      </div>
    );
  } else {
    return null;
  }
}
