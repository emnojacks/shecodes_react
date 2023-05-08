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
            {props.temperature}{" "}°F |
        <button
          className="btn btn-temp"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          onClick={convertToMetric}
        >°C</button>
      </span>
    );
  } else {
    let metric = Math.round(((props.temperature - 32) * 5) / 9);
    return (
      <span>
        {metric}
        <button
          className="btn btn-temp"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          onClick={convertToImperial}
        >°F</button>
        | °C
      </span>
    );
  }
}
