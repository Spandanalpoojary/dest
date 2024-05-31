import React,{useState} from 'react'
import {Button} from '@mui/material';
import {useEffect} from 'react'


export default function Effect() {
    const [count,setCount] = useState(1)
const Counter = () =>{
    setCount(count+1)
    
}
const [square,setSquare]=useState(0);
useEffect(()=>{
    setSquare(count*count)
},[count])
  return (
    <div><h1>This is useEffect page</h1>
    <h1>Square:{square}</h1>
    <h1>Counter:{count}</h1>
    <Button onClick={Counter} varient='contained'>+</Button>
    
    </div>
  )
}
