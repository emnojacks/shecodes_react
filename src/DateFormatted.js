import React from "react";

export default function DateFormatted(props) {
  console.log(props.date);
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
  const hrs = props.date.getHours();
  const mins = props.date.getMinutes();

  if (mins < 10) {
    mins = `0${mins}`;
  }
  if (hrs < 10) {
    hrs = `0${hrs}`;
  }

  return (
    <p>
      {day} {month} {date} {hrs}:{mins}
    </p>
  );
}
