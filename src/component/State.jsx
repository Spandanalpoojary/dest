
import React,{useState} from 'react'
import {Button} from '@mui/material';

export default function State() {
//let ount=1;
const [count,setCount] = useState(1)
const [name,setName] = useState("kiran")
const Counter = () =>{
    setCount(count+1)
    
}
const ChangeName = ()=>{
    setName("Rahul")
}
const [Email,setEmail]= useState("")
const handleChange=(e)=>{
    console.log(e.target.value)
    setEmail(e.target.value)
}

const [color,setColor]= useState("red")

const [num,setNumber]= useState("")
const handlenum=(e)=>{
    console.log(e.target.value)
    setNumber(e.target.value)
}
const [reg,setreg]= useState("")
return (
    <div><h1>This is state page</h1>
    <h2>{Email}</h2><br/> 
    <input onChange={handleChange} type="text" placeholder='Enter email'/> 

    <h2>Number:{num}</h2><br/> 
    <input onChange={handlenum} type="text" placeholder='Enter number'/> 

    <h2>Register:{reg}</h2><br/> 
    <input onChange={(e)=>{setreg(e.target.value)}} type="text" placeholder='Enter your Register'/>


    <h2>Counter:{count}</h2>
    <Button onClick={Counter} varient='contained'>+</Button>
    <h2>Name:{name}</h2>
    <Button onClick={ChangeName} varient='outlined'>Change Name </Button>


<h1> My favourate color is {color}</h1>
<Button color="success" onClick={()=>setColor("green")} varient='outlined'>green </Button>
<Button onClick={()=>setColor("blue")} varient='outlined'>blue</Button>

<Button onClick={()=>setColor("pink")} varient='outlined'>pink </Button>

<Button onClick={()=>setColor("red")} varient='outlined'>red </Button>



    </div>
  )
}
