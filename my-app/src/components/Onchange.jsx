import React, { useState } from 'react'

const Onchange = () => {
    const [val, setVal] = useState("");
  return (
    <>
        <h2>Onchange event and form data</h2>
        <input type='text' placeholder='Enter something' value={val} onChange={(e)=>setVal(e.target.value)} />
        <h2>{val}</h2>
        <button onClick={()=>setVal("")}>Reset</button>
        
    </>
  )
}

export default Onchange