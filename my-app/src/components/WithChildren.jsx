import React from 'react'

const WithChildren = ({children, col="red"}) => {
  return (
    <div style={{color: "green"}}>
        <h1 style={{color: col}}>Passing props with children</h1>
        {children}
    </div>
  )
}

export default WithChildren