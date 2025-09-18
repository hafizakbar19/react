import React from 'react'

const FuncInProps = ({showName, name}) => {
  return (
    <>
        <h1>Passing function as props</h1>
        <button onClick={()=>showName(name)}>Click me</button>
    </>
  )
}

export default FuncInProps