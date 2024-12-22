import React from 'react'
import { useState } from 'react'

const MultiTask = () => {
   function submit (event){
     event.preventDefault();
     console.log(inputs);
     

   }
 const change=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setinputs((PreviousState)=>{
        return{
            ...PreviousState,[name]:value

        }
    })
 }  


    const[inputs,setinputs]=useState({})
  return (
    <div>
        <form  onSubmit={submit}>
        <label  >enter you name:</label>
        <input type="text" name='name' onChange={change}/><br />
        <label >enter your age:</label>
        <input type="number" name='number' onChange={change} /><br />
        <label >enter your email:</label>
        <input type="email" name='email' onChange={change} /><br />
        {/* text area */}
        <textarea name="about" id="" value={inputs.about}  onChange={change}></textarea><br />
        {/* select options */}
        <label >select country:</label><br />
        <select name='country' value={inputs.coutry} onChange={change}>
            <option value="select">select</option>
            <option value="india">india</option>
            <option value="usa">usa</option>
            <option value="brazil">brazil</option>
        </select> <br />
         {/* input submit button */}
         <input type="submit" />
       
        </form>
    </div>
  )
}

export default MultiTask