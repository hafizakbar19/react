import React, { useState } from "react";

const NumberToText = () => {
  const [num, setNum] = useState(0);
  return (
    <>
      <h1>Number to Text</h1>
      <h2>Count: {num}</h2>
      { 
        num == 0 ? <h2>Zero</h2>
        : num == 1 ? <h2>One</h2>
        : num == 2 ? <h2>Two</h2>
        : num == 3 ? <h2>Three</h2>
        : num == 4 ? <h2>Four</h2>
        : num == 5 ? <h2>Five</h2>
        : num == 6 ? <h2>Six</h2>
        : <h2>Out of range</h2>
      }
      <h3>Range : (0 to 6 )</h3>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
      <button onClick={() => setNum(0)}>0</button>
    </>
  );
};

export default NumberToText;
