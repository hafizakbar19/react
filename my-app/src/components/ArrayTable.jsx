import React, { use } from "react";
import CardProps from "./CardProps";

const ArrayTable = () => {
  let users = [
    {
      id: 1,
      name: "Akbar Ali",
      age: 35,
      city: "Karachi",
    },
    {
      id: 2,
      name: "Akbar Khan",
      age: 35,
      city: "Karachi",
    },
    {
      id: 3,
      name: "Akbar Ali",
      age: 35,
      city: "Karachi",
    },
    {
      id: 4,
      name: "Akbar Ali",
      age: 35,
      city: "Karachi",
    },
    {
      id: 5,
      name: "Akbar Ali",
      age: 35,
      city: "Karachi",
    },
    {
      id: 6,
      name: "Akbar Ali",
      age: 35,
      city: "Karachi",
    },
  ];
  return (
    <>
      <h1>Table data from Array</h1>
      {users.map((item) => (
        <div key={item.id} style={{
            border: '2px solid red',
            margin: '10px',
            borderRadius: '15px',
            padding: '10px'
            }}>
          <CardProps data={item} />
        </div>
      ))}
      {/* <table border='1'>
        <thead style={{color: 'red'}}>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((data)=>(
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                        <td>{data.city}</td>
                    </tr>
                ))
            }
        </tbody>

    </table> */}
    </>
  );
};

export default ArrayTable;
