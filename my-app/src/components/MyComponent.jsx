import React from 'react'

export let myName = "Ali"
const MyComponent = () => {
  return (
    <>
    <h2>Welcome from my component.</h2>
    {/* <SecondComp /> */}
    
    </>
  )
}

export const SecondComp = () => {
  return(
    <>
      <h2>Hello from inner function</h2>
    </>
  )
}

export default MyComponent