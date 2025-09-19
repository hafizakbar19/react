import React from 'react'
import {useFormStatus} from 'react-dom';

const UseFormStatus = () => {
    
    const  handleForm = async ()=>{
        alert('are you sure?');
        await new Promise(res=>setTimeout(res,3000))
        alert("form submitted successfully.");
        
    }
    
    const Myform = ()=> {
        const {pending} = useFormStatus()
        return(
            <>
            <input type="text" placeholder='Enter your name'/>
            <br /><br />
            <input type="tel" placeholder='Enter your Phone number'/>
            <br /><br />
            <input type="email" placeholder='Enter your email'/>
            <br /><br />
            <button disabled={pending}>{pending ? 'submitting...' : 'Submit'}</button>
            </>
        )
    }


  return (
    <>
    <h1>Use form status hook practice</h1>
    <form action={handleForm}>

    <Myform />
    </form>
    </>
  )
}

export default UseFormStatus