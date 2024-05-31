import React from 'react'

export default function ArrayMethod() {
    const fruits=["Apple","Banana","Orange","Mango"];
    let mapping=fruits.map((item,index)=><h1 key={index}>{++index}. {item}</h1>)
    let obj={name:"Spanda"}
    let studentData=[
        {name:"Spanda",reg:123,phone:12345678,email:"spanda@sdmcujire.in"},
        {name:"Sandhya",reg:234,phone:23456789,email:"sandhya@sdmcujire.in"},
        {name:"Sathvi",reg:345,phone:34567890,email:"sathvi@sdmcujire.in"},
        {name:"Raja",reg:456,phone:45678901,email:"raja@sdmcujire.in"},
        {name:"Rani",reg:567,phone:56789012,email:"rani@sdmcujire.in"}
    ]
  return (
    <div><h1 style={{color:"white",backgroundColor:"red"}}>ArrowMethod</h1>
    <h2>{fruits}</h2>
    {mapping}
    <table border={2}>
        <tr>
            <th> SL.No</th>
            <th>FRUITS</th>
        </tr>
        {fruits.map((item,index)=>{
            return(
                <tr>
            <td>{++index}.</td>
            <tr>{item}</tr>
        </tr>
           
            )
        })}
        
    </table>
    {obj.name}
    <table border={2}>
        <tr>
        <th>SL.NO</th>
        <th>REG.NO</th>
        <th>NAME</th>
        <th>PHONE</th>
        <th>EMAIL</th>
        </tr>
        {studentData.map((value,index)=>{
            return(
                <tr>
                     <td> {++index}</td>
                   <td> {value.name}</td>
                   <td> {value.reg}</td>
                   <td> {value.phone}</td>
                   <td> {value.email}</td>

                </tr>
            )
        })}
    </table>
    
    </div>
  )
}
