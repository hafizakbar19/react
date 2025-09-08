const SpreadOperator = () => {
  let colors = ["Green","Yellow","Blue","Red"];
  let morColors = [...colors,"Purple","Orange"];

  // let student = {
  //   name: "Ali",
  //   age: 10
  // }

  // let newStudent = {
  //   ...student, grade: "A", city: "Lahore"
  // }

  // console.log(newStudent)


  return (
    <>
    <h2>Spread operator in React</h2>
    <h3>Colors from an array through Map:</h3>
    <ul>
      {morColors.map((col,i)=>
        <li key={i}>{col}</li>
      )}
    </ul>
    </>
  )
}

export default SpreadOperator   