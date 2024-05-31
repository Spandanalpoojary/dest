import React from 'react'

export default function Destructuring() {
    const vehicle = ["BMW","Mustag","Volvo","Ford"];
    const car1= vehicle[0];//old method of destructuring
    const car2= vehicle[1];//old method of destructuring

    const[a,b,c]=vehicle//new mwthod of destructing
    const number=[1+1,5+5,10+10]
    const[x,y,z]=number
    //object
    //const myVehicle={brand:"Ford",model:"Mustag",year:2020,color:"red"}
    
    //const {brand,model,year,color}=myVehicle

        const myNewVehicle ={
            brand:"Ford",
            model:"Mustag",
            year:2020,
            color:"red",
        register:{
            city:"Mangalore",
            state:"Karnataka",
            country:"India"
        }}
         const {brand,model,color,register:{city,state}}=myNewVehicle
         //const {city,state=mynewVehicle.register}
  return (
    <div><h1 Styl e={{color:"white",backgroundColor:"red"}}>Destructuring</h1>
    <h2>{car1}</h2>
    <h2>{car2}</h2>
    <h2>{a}</h2>
    <h2>{b}</h2>
    <h2>{c}</h2>
    <h2>{x}</h2>
    <h2>{y}</h2>
    <h2>{z}</h2>
    <h2>{brand}</h2>
    <h2>{model}</h2>
    <h2>{color}</h2>
    <h2>{state}</h2>
    <h2>{city}</h2>
    </div>
  )
}
