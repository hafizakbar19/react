import React from 'react'

const Props = ({colors}) => {
  return (
    <>
        <h1>Hello from props</h1>
        <h2>Green: {colors[1]} </h2>
        <h2>Yellow: {colors[3]} </h2>
        <h2>Blue: {colors[0]} </h2>

    </>
  )
}

export default Props