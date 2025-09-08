import React, { useState } from 'react'

const CheckBox = () => {
    const [task,setTask] = useState([])

    const tasksFunc = (e) => {
      console.log(e.target.value, e.target.checked)
      if(e.target.checked){
        setTask([...task, e.target.value])
      }else{
        setTask([...task.filter((item)=> item != e.target.value)])
      }
    }
  return (
    <>
    <h2>Checkbox data</h2>
    <input type='checkbox' id='cooking' value='cooking' onChange={tasksFunc}/>
    <label htmlFor='cooking'>Cooking</label>
    <hr />
    <hr />

    <input type='checkbox' id='reading' value='reading' onChange={tasksFunc}/>
    <label htmlFor='reading'>Reading</label>
    <hr />
    <hr />

    <input type='checkbox' id='traveling' value='traveling' onChange={tasksFunc}/>
    <label htmlFor='traveling'>Traveling</label>
    <hr />
    <hr />

    {task.toString()}

    </>
  )
}

export default CheckBox