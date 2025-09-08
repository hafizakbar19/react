import React, { useState } from 'react'

const AssignmentOne = () => {
    const [count,setCount] = useState(0);
  return (
    <>
    <h1>Hit counter</h1>
    <h2>Count : {count}</h2>
    <button onClick={()=>setCount(count +1)}>Plus</button>
    <button onClick={()=>setCount(count -1)}>Minus</button>
    </>
  )
}

export default AssignmentOne