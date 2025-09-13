import React, { useEffect, useState } from "react";

const DigitalClock = ({ tColor, bgColor }) => {
  let [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setTimeout(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  });
  return (
    <>
      <h1
        style={{
          color: tColor,
          backgroundColor: bgColor,
          width: "250px",
          height: "80px",
          borderRadius: "10px",
          padding: "10px",
          textAlign: "center",
        }}
      >
        {time.toLocaleTimeString()}
      </h1>
    </>
  );
};
35686179
35644381

export default DigitalClock;
