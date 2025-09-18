import React, { useRef } from 'react'

const Uncontrolled = () => {
    const nameRef = useRef();
    const ageRef = useRef();
    const passwordRef = useRef();

    const formHandler = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(ageRef.current.value)
        console.log(passwordRef.current.value)
    }

  return (
    <>
    <h1>Uncontrolled components in React</h1>
    {
        //the component that doesn't use state to control the form is called uncontrolled component
    }
    <form onSubmit={formHandler} action="">
        <input type="text" ref={nameRef} placeholder='Enter Your name'/>
        <br />
        <br />
        <input type="number" ref={ageRef} placeholder='Enter Your age'/>
        <br />
        <br />
        <input type="password" ref={passwordRef} placeholder='Enter Your password'/>
        <br />
        <br />
        <button>Submit</button>
    </form>
    </>
  )
}

export default Uncontrolled