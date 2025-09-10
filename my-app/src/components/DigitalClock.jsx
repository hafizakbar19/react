import React, { useState } from 'react'

const DigitalClock = () => {
    let [color,setColor] = useState("");
  return (
    <>
    <h1>Digital clock</h1>
    <select value={color} onChange={e => setColor(e.target.value)}>
        <option value="">Select a color</option>
        <option value="green">Green</option>
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
    </select>
    <div style={{ color: color }}>{color}</div>
    </>
  )
}

export default DigitalClock