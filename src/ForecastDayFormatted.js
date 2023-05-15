import React from "react";

export default function ForecastDayFormatted(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = days[props.date.getDay()];
  return <p>{day} </p>;
}
