import React from 'react'

const Courses = ({courses}) => {
  return (
    <>
    <h2>Courses</h2>
    {
        courses.map((data)=>(
            <ul>
                <li>Course: <span style={{color: 'yellow'}}>{data.courseName}</span></li>
                <li>Duration: {data.duration}</li>
                <li>Semester Fee : {data.semFee}</li>
            </ul>
        ))
    }
    </>
  )
}

export default Courses