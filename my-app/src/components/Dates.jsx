import React from "react";

const Dates = () => {
  let today = new Date();
  return (
    <>
      <h1>Date in React</h1>
      <h2>{today.toTimeString()}</h2>
      <h2>Date: {today.getDate()}</h2>
      <h2>
        Day:{" "}
        {today.getDay() == 1
          ? "Monday"
          : today.getDay() == 2
          ? "Tuesday"
          : today.getDay() == 3
          ? "Wednesday"
          : today.getDay() == 4
          ? "Thursday"
          : today.getDay() == 5
          ? "Friday"
          : today.getDay() == 6
          ? "Saturday"
          : "Sunday"}
      </h2>
      <h2>Month: {today.getMonth() + 1}</h2>
      <h2>Year: {today.getFullYear()}</h2>
      <h2>
        My style: {today.getDate()}/{today.getMonth() + 1}/{today.getFullYear()}
      </h2>
    </>
  );
};

export default Dates;
