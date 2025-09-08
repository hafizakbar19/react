import React, { useState } from 'react'

const Select = () => {
    const [city,setCity] = useState("")
    const [gender,setGender] = useState("")
  return (
    <>
        <h1>Data from select and radio button</h1>
        <select id='' defaultValue="Karachi" onChange={(e)=>setCity(e.target.value)}>
            <option value={"Karachi"}>Karachi</option>
            <option value={"Lahore"}>Lahore</option>
            <option value={"Islamabad"}>Islamabad</option>
            <option value={"Dubai"}>Dubai</option>
        </select>
        <h3>Selected city: {city}</h3>
        <h2>Radio button</h2>
        <input type='radio' name='gender' value={'male'} checked={gender == "male"} id='male' onChange={(e)=>setGender(e.target.value)} />
        <label htmlFor='male'>Male</label>
        <input type='radio' name='gender' value={'female'} checked={gender == "female"} id='female' onChange={(e)=>setGender(e.target.value)} />
        <label htmlFor='female'>Female</label>
        <h3>{gender}</h3>
    </>
  )
} 

export default Select