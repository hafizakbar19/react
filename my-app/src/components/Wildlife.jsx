import React from "react";

const Wildlife = () => {
  const message = (param)=>{
    alert(`The next thing is ${param}!`)
  }
  return (
    <>
      <h1>Protect animals</h1>
      <img
        src="https://plus.unsplash.com/premium_photo-1724864863815-1469c8b74711?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={300}
        alt="Sparrow"
      />
      <h2>Things to do</h2>
      <ul>
        <li>Keep the environment clean</li>
        <li>Do not cut trees</li>
        <li>Change your ordinary vehicles with electric ones</li>
        <li>Make less use of plastic</li>
      </ul>
      <button onClick={()=>message("Akbar")}>Know more!</button>
    </>
  );
};

export default Wildlife;
