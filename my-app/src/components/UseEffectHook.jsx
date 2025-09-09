import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(9);

  useEffect(() => {
    console.log(count, "\t", data);
  },[count,data]);

  return (
    <>
      <h1>UseEffect hook</h1>
      {count}
      <br />
      {data}
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setData(data * 2)}>Data</button>
    </>
  );
};

export default UseEffectHook;
