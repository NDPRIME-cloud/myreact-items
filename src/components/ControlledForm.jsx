import React, { useState } from 'react'

const ControlledForm = () => {
    const [formData, setFormData] = useState({name:"", email:""})

    const handelSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)

    }
    const handleChange = (e) =>{
        const {name,value} = e.target
        setFormData((prev)=>({...prev,[name]: value}))
    }





  return (
    <div>
       <form action="" onSubmit={handelSubmit}>
        <input type="text" 
        name="" 
        id="" 
        value={formData.name}
        onChange={handleChange}
        />

        <input type="email" name="" id="" 
        value={formData.email}
        onChange={handleChange}


        
        />

        <button type='submit'>Submit</button>

       </form>
    </div>
  )
}

export default ControlledForm