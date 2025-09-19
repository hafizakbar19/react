import React from 'react'

const Child = (props) => {
    //getting ref from parent component
    console.log(props.ref)
  return (
    <>
        <h3>This is the child component of UseRefHook component</h3>
    </>
  )
}

export default Child;