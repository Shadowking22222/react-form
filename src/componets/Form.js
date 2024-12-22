import React, { useState } from 'react'

const Form = () => {
    const [name,setname]=useState()
    
    const sub=(event)=>{
        console.log(name);
        console.log('submite succusfully');
        event.preventDefault();
        

    }
    
  return (
    <div>
        <form onSubmit={sub}>
            <label>enter your name</label>
            <input type="text" onChange={(e)=>{
                setname(e.target.value)
            }} />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Form