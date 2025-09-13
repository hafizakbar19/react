import React, { useState } from 'react'
import DigitalClock from './DigitalClock';

const DropDown = () => {
    const [tColor,setTcolor] = useState("green");
    const [bgColor,setBgcolor] = useState("yellow");
  return (
    <>
        <h1>Digital clock</h1>
    <select value={tColor} onChange={e => setTcolor(e.target.value)}>
        <option value="">Select a color</option>
        <option value="green">Green</option>
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
    </select>
    <br/>
    <select value={bgColor} onChange={e => setBgcolor(e.target.value)}>
        <option value="">Select a color</option>
        <option value="green">Green</option>
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
    </select>

    <DigitalClock tColor={tColor} bgColor={bgColor}/>
    </>
  )
}

export default DropDown