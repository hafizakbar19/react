import React, { useState } from 'react'

const Controlled = () => {
    const [user,setUser] =useState("");
    const [age,setAge] =useState("");
    const [city,setCity] =useState("");

    const clearForm = ()=> {
        setUser("")
        setAge("")
        setCity("")
    }

  return (
    <>
        <h2>Controlled Components</h2>
        <form action=""> 
        <input type='text' placeholder='Name' onChange={(e)=>setUser(e.target.value)} value={user} />
        <br/>
        <br/>
        <input type='number' placeholder='Age' onChange={(e)=>setAge(e.target.value)} value={age} />
        <br/>
        <br/>
        <input type='text' placeholder='City' onChange={(e)=>setCity(e.target.value)} value={city}/>
        <br/>
        <br/>
        </form>

        <h2> {user}</h2>
        <h2>{age}</h2>
        <h2> {city}</h2>

        <button onClick={clearForm}>Clear</button>
    </>
  )
}

export default Controlled   