import React from "react";
import ForecastDayFormatted from "./ForecastDayFormatted";

export default function WeatherForecastDay(props) {
  if (props) {
    return (
      <div className="forecast-container">
        <ForecastDayFormatted date={new Date(props.forecast.time * 1000)} />
        <img
          src={props.forecast.condition.icon_url}
          alt={props.forecast.condition.icon}
        />
        <span className="daily-temps">
          {Math.round(props.forecast.temperature.minimum)}° |{" "}
          {Math.round(props.forecast.temperature.maximum)}°
        </span>
      </div>
    );
  } else {
    return null;
  }
}
