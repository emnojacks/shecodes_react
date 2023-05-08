import React from "react";
import { useState } from "react";

export default function TempUnitConversion(props) {
  const [units, setUnits] = useState("imperial");

  function convertToMetric(e) {
    e.preventDefault();
    setUnits("metric");
  }

  function convertToImperial(e) {
    e.preventDefault();
    setUnits("imperial");
  }

  if (units === "imperial") {
    return (
      <span>
        {Math.round(props.weather.temperature)}
        °F |{" "}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          onClick={convertToMetric}
        >
          °C
        </a>
      </span>
    );
  } else {
    return (
      <span>
        {Math.round(props.weather.temperature)}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          onClick={convertToImperial}
        >
          °F
        </a>
        | °C
      </span>
    );
  }
}
