import React from 'react'
import Hello,{name,phone,address,pincode} from './Exp'
import {add,sub,multi,div} from './Exp'


export default function Imp() {
  return (
     <div><h1 style={{color:"white",backgroundColor:"red"}}>Import</h1>
     <h1>Name:{name}</h1>
     <h1>Phone NO:{phone}</h1>
     <h1>Address:{address}</h1>
     <h1>Pin code:{pincode}</h1>
     <button onClick={Hello}>Hello</button>
     <button onClick={add}>Add</button>
     <button onClick={sub}>Sub</button>
     <button onClick={multi}>Multiply</button>
     <button onClick={div}>Divide</button>
     
     </div>

  )
}
