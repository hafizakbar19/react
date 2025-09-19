import React, { useRef, useState, useEffect } from "react";
import Child from "./Child";

const UseRefHook = () => {
  const h1ref = useRef();
  const btnRef = useRef(1);
  const [col, setCol] = useState(true);

  const changeColor = () => {
    col
      ? (h1ref.current.style.color = "red")
      : (h1ref.current.style.color = "yellow");
    setCol(!col);
  };

  // const startTimeRef = useRef(Date.now()); // initial value is current time
  // const [now, setNow] = useState(Date.now());

  // useEffect(() => {
  //   const id = setInterval(() => setNow(Date.now()), 1000);
  //   return () => clearInterval(id);
  // }, []);

  // const seconds = Math.floor((now - startTimeRef.current) / 1000);

  return (
    <div>
      <h1 ref={h1ref}>Use Ref hook practice in React</h1>
      <button onClick={changeColor}>Change color</button>
      {/* <p>Seconds passed: {seconds}</p>; */}
      <input ref={btnRef}  />
      < Child ref={h1ref}/>
    </div>
  );
};

export default UseRefHook;
