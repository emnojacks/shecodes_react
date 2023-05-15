import React from "react";

export default function DateFormatted(props) {
  //var decs
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let mos = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = days[props.date.getDay()];
  const month = mos[props.date.getMonth()];
  const date = props.date.getDate();
  let hrs = props.date.getHours();
  let mins = props.date.getMinutes();

  if (mins < 10) {
    mins = `0${mins}`;
  }
  if (hrs < 10) {
    hrs = `0${hrs}`;
  }

  return (
    <div>
      {day}day &nbsp; {month} {date} &nbsp; {hrs}:{mins}
    </div>
  );
}
