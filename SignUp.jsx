import React from 'react'
import { Form } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { useState } from "react"; 
import axios from "axios"; 

const SignUp = () => {
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[password,setPassword]=useState("")
  const[success,setSuccess]=useState("")
  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")


  // A function to send data to the database
  const submit=async(e)=>{
    e.preventDefault()
    setLoading("Please wait as we upload your data")

    try {
      const data=new FormData()

      data.append("username",username)
      data.append("email",email)
      data.append("phone",phone)
      data.append("password",password)

      const response=await axios.post("https://peter68.pythonanywhere.com/api/signup",data)

      setLoading("")
      setSuccess(response.data.Success)

    } catch (error) {

      setLoading("")
      setError(error.message)

    }
  }

  return (
    <div className='row justify-content-center mt-4'> 
         {/* <h1>Welcome to Sign Up Component</h1> */}

         <div className='col-md-6 p-4 card shadow'>

         <h2>Sign Up</h2>
         
         <form action="" onSubmit={submit}>

          <p className='text-warning'>{loading}</p>
          <p className='text-danger'>{error}</p>
          <p className='text-success'>{success}</p>

          <input type="text" placeholder='Enter username' className='form-control'required value={username} onChange={(e)=>setUsername(e.target.value)}/>
          <br />
          <br />
          <input type="email" placeholder='Enter email' className='form-control' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <br />
          <br />
          <input type="tel" placeholder='Enter phone' className='form-control' required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
          <br />
          <br />
          <input type="password" placeholder='Enter password' className='form-control' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <br />
          <br />
          <button className='btn btn-primary' type='submit'>Sign Up</button>
          <br />
         </form>

         Already have an account?<Link to="/signin">Sign In</Link>

         </div>

    </div>
  )
}

export default SignUp