import React, { useState } from 'react'

const TableGenerator = () => {
    const [number, setNumber] = useState('');
    const [table, setTable] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setNumber(value);
        if (!isNaN(value) && value !== '') {
            const num = parseInt(value, 10);
            const newTable = [];
            for (let i = 1; i <= 10; i++) {
                newTable.push(`${num} x ${i} = ${num * i}`);
            }
            setTable(newTable);
        } else {
            setTable([]);
        }
    };

    return (
        <>
            <h1>Table Generator</h1>
            <input
                type="number"
                value={number}
                onChange={handleChange}
                placeholder="Enter a number"
            />
            <ul>
                {table.map((row, idx) => (
                    <li key={idx}>{row}</li>
                ))}
            </ul>
        </>
    );
}

export default TableGenerator