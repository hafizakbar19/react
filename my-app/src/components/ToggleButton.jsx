import React, { useState } from 'react'
import AssignmentOne from './AssignmentOne';

const ToggleButton = () => {
    const [display,setDisplay] = useState(true);
  return (
    <>
        <h1>Toggle Button</h1>
        {
            display ? <AssignmentOne /> : null
        }
        <button onClick={()=>setDisplay(!display)}>Toggle</button>
    </>
  )
}

export default ToggleButton