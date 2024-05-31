import React from 'react'

export default function ArrowFunction() {
    /*function Hello(){
        alert("this is hello function")
    }*/
    const Arrow = a =>alert("This is arrow function"+a)
     
    const Printer=(name,phone)=>{
        alert(`My name is ${name},Phone: ${phone}`)
    }
    
  return (
    <div>
        <h1 style={{color:"white",backgroundColor:"red"}}>ArrowFunction</h1>
        <button onClick={()=>Arrow("Spandana")}>Arrow</button>
        <button onClick={()=>Printer("Arun",987654321)}>Print</button>
    </div>


    
  );
}
