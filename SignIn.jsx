import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"; 

const SignIn = () => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[success,setSuccess]=useState("")
  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const navigate=useNavigate()

  const submit=async(e)=>{
    e.preventDefault();
    setLoading('Please wait as we log you in')

    try {
      const data= new FormData()

      data.append("email",email)
      data.append("password",password)

      const response=await axios.post("https://peter68.pythonanywhere.com/api/signin",data)

      setLoading("")
      setSuccess(response.data.Message)

    if(response.data.user){
      navigate("/")
    }
      

    } catch (error) {
      setLoading("")
      setError(error.message)
      
    }
  }

  return (
    <div className='row justify-content-center mt-4'>
      <div className='col-md-6 p-4 card shadow'>
         {/* <h1>Welcome to Sign In Component</h1> */}

         <h2>Sign In</h2>

         <form action="" onSubmit={submit}>
         <p className='text-warning'>{loading}</p>
         <p className='text-danger'>{error}</p>
         <p className='text-success'>{success}</p>

          <input type="email" placeholder='Enter your email' required  className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <br />
          <br />
          <input type="password" placeholder='Enter your password' required className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <br />
          <button className='btn btn-primary' type='submit'>Sign In</button>

         </form>

         Don't have an account? Please <Link to="/signup">Sign Up</Link>
         </div>
    </div>
  )
}

export default SignIn