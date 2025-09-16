import React, { useEffect, useState } from 'react'

const LifeCycle = () => {
  let [counter,setCounter] = useState(1);
  let onMount = () => console.log("component mounted");
  let onUpdate = () => console.log("component updated");
  let onUnmount = () => console.log("component unmounted");

  useEffect(()=>onMount(),[]);
  useEffect(()=>onUpdate(),[counter]);
  useEffect(()=>{
    return ()=>onUnmount()
  },[]);

  return (
    <>
        <h1>Life cycle of the component</h1>
        <h2>Value : {counter}</h2>
        <button onClick={()=>setCounter(counter+1)}>Update</button>
    </>
  )
}

export default LifeCycle;