import React from 'react'

const CardProps = ({data}) => {
  return (
    <>
        <h2 key={data.id} style={{textAlign: 'center'}}>Employee card</h2>
        <h3>ID: {data.id}</h3>
        <h3>Name: {data.name}</h3>
        <h3>Age: {data.age}</h3>
        <h3>City: {data.city}</h3>
       
    </>
  )
}

export default CardProps