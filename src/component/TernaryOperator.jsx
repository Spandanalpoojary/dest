import React from 'react'

export default function TernaryOperator() {
    const Click=(item)=>{
        /*if(item=="left"){
            alert("You have clicked on left button")
        }
        else if(item=="back"){
            alert("You have clicked on back button")
        }
            else{
                alert("You have clicked on right button")
            }*/
            
           item=="left"?
           alert("You have clicked on left button")
            :
            item=="back"?
            alert("You have clicked on back button")
            :
            alert("You have clicked on right button")
           
        }

    let dark = true;

        
  return (
    <div><h1 style={{color:"white",backgroundColor:"red"}}>TernaryOperator</h1>
    <button onClick ={()=>Click("left")}>Left</button>
    <button onClick ={()=>Click("Right")}>Right</button>
    <button onClick ={()=>Click("back")}>Back</button>

    <h1 style={{backgroundColor:dark?"black":"white",color:dark?"white":"black"}}>Hwllo ! My name is Spandana</h1>
</div>
  )
}
