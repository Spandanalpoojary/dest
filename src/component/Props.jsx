import React from 'react'

export default function Props() {
    const Print=({name,phone})=><h1>My name is {name}-{phone}</h1>
    const fruits=["apple","banana","orange","mango"];
    const FruitsDisplay=({value})=><li style={{textTransform:"capitalize"}}>{value}</li>
  return (
    <div><h1>This is Props page</h1>
    {/*{Print("Spandana")}*/}
    <Print name="Spandana" phone={1234567890}/>
    <h1>I have {fruits.length} Fruits</h1>
    <ol>
    {fruits.map((item)=><FruitsDisplay value={item}/>)}
    </ol>
    </div>
    
  )
}
