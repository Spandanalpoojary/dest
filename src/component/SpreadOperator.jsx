import React from 'react'

export default function SpreadOperator() {
    const num1=[1,2,3,4,5];
    const num2=[6,7,8,9,0];
    const num3=[...num1,...num2]
    console.log(num3)
    const myVehicle={
        brand:"Ford",
        model:"Mustag",
        year:2020,
        color:"red"}

        const updatedVehicle={
            verrsion:1.2,
            top_speed:220,
            color:"yellow"
        }

        const myUpdatedVehicle={...myVehicle,...updatedVehicle}
        console.log(myUpdatedVehicle)

        const fruits=["apple","banana","mango","orange","kiwi"];
        const [a,b,...c]=fruits//destructing and spread operator

  return (
    <div><h1 Style={{color:"white",backgroundColor:"red"}}>SpreadOperator</h1>
    <h2>{num1}</h2>
    <h2>{num2}</h2>
    <h2>{num3}</h2>
    <h2>{a}</h2>
    <h2>{b}</h2>
    <h2>{c}</h2>
    </div>
  )
}
