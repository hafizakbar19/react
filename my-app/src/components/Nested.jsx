import React from 'react'
import Courses from './Courses'

const Nested = () => {
    let unis = [
        {
            uniName: "AIOU",
            city: "Islamabad",
            rank: 4,
            courses: [
                {
                    courseName: "BSCS",
                    duration: "5 years",
                    semFee: "PKR 25,000"
                },
                {
                    courseName: "BSCS",
                    duration: "5 years",
                    semFee: "PKR 25,000"
                },
                {
                    courseName: "BSCS",
                    duration: "5 years",
                    semFee: "PKR 25,000"
                },
                {
                    courseName: "BSCS",
                    duration: "5 years",
                    semFee: "PKR 25,000"
                },
            ]
        },
        {
            uniName: "Iqra",
            city: "Karachi",
            rank: 4,
             courses: [
                {
                    courseName: "BSCS",
                    duration: "5 years",
                    semFee: "PKR 25,000"
                },
                {
                    courseName: "BSCS",
                    duration: "5 years",
                    semFee: "PKR 25,000"
                },
                {
                    courseName: "BSCS",
                    duration: "5 years",
                    semFee: "PKR 25,000"
                },
                {
                    courseName: "BSCS",
                    duration: "5 years",
                    semFee: "PKR 25,000"
                },
            ]
        },
        {
            uniName: "Govt Collage",
            city: "Lahore",
            rank: 4,
             courses: [
                {
                    courseName: "BSCS",
                    duration: "5 years",
                    semFee: "PKR 25,000"
                },
                {
                    courseName: "BSCS",
                    duration: "5 years",
                    semFee: "PKR 25,000"
                },
                {
                    courseName: "BSCS",
                    duration: "5 years",
                    semFee: "PKR 25,000"
                },
                {
                    courseName: "BSCS",
                    duration: "5 years",
                    semFee: "PKR 25,000"
                },
            ]
        },
        {
            uniName: "Shalimar",
            city: "Peshawar",
            rank: 4,
             courses: [
                {
                    courseName: "BSCS",
                    duration: "5 years",
                    semFee: "PKR 25,000"
                },
                {
                    courseName: "BSCS",
                    duration: "5 years",
                    semFee: "PKR 25,000"
                },
                {
                    courseName: "BSCS",
                    duration: "5 years",
                    semFee: "PKR 25,000"
                },
                {
                    courseName: "BSCS",
                    duration: "5 years",
                    semFee: "PKR 25,000"
                },
            ]
        },
        {
            uniName: "BZU",
            city: "Multan",
            rank: 4,
             courses: [
                {
                    courseName: "BSCS",
                    duration: "5 years",
                    semFee: "PKR 25,000"
                },
                {
                    courseName: "BSCS",
                    duration: "5 years",
                    semFee: "PKR 25,000"
                },
                {
                    courseName: "BSCS",
                    duration: "5 years",
                    semFee: "PKR 25,000"
                },
                {
                    courseName: "BSCS",
                    duration: "5 years",
                    semFee: "PKR 25,000"
                },
            ]
        },
    ]
  return (
    <div>
        <h1>Data from nested component via props</h1>
        {
            unis.map((uni)=>(
                <div style={{
                    width: '500px',
                    backgroundColor: 'green',
                    borderBottom: '5px solid red',
                    borderRadius: '10px',
                    padding: '10px',
                    margin: '15px'
                }}>
                <h2 style={{textAlign: 'center'}}>University detail</h2>
                <h3>Name: {uni.uniName}</h3>
                <h3>City: {uni.city}</h3>
                <h3>Rank: {uni.rank}</h3>
                <Courses courses = {uni.courses}/>
                </div>
            ))
        }
    </div>
  )
}

export default Nested