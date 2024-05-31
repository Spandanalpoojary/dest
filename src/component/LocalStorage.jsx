import React from 'react'

export default function LocalStorage() {
    //insert - localstorage.setItem("name","rahul")
     //remove - localstorage.removeItem("name")
      //get - localstorage.getItem("name")
      const Addspandana=()=>localStorage.setItem("name","spandana")
      localStorage.setItem("phone","123")
      const Addanu =()=>localStorage.setItem("name","anu")
      const Del =()=>localStorage.removeItem("name")

      const GetData =()=>{
        let data=localStorage.getItem("name")
        console.log(data)
      }
  return (
    <div><h1>This is Local Storage</h1>
    <button onClick={Addspandana}>Add Spandana</button>
    <button onClick={Addanu}>Add anu</button>
    <button onClick={Del}>Delete</button>
    <button onClick={GetData}>Get Name</button>
    </div>

)
}
