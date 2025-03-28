import React from 'react'
import { useState } from "react";  // for state management
import axios from "axios"; //For backend API access
import { useLocation } from 'react-router-dom';

const MakePayments = () => {
    const[phone,setPhone]=useState("")
    const[message,setMessage]=useState("")
    const[loading,setLoading]=useState("")
    const[error,setError]=useState("")
    const{product}=useLocation().state || {}

    // A funcyion to intergrate mpesa

    const submit=async(e)=>{
        e.preventDefault()
        setLoading("Please wait...")

        try {
            const data=new FormData()

            data.append("phone",phone)
            data.append("amount",product.cost)

            const response=await axios.post("https://peter68.pythonanywhere.com/api/mpesa_payment",data)

            setLoading("")
            setMessage(response.data.message)
            
        } catch (error) {
            setLoading("")
            setError(error.message)
            
        }
    }

  return (
    <div className='row justify-content-center mt-5'>

        <h2 className='mt-4 text-white'>Make Payment - Lipa na M-pesa</h2>
    <div className='col-md-6 card shadow p-4 bg-dark'>

        <p className='text-info'>Product Name:{product.product_name}</p>
        <p className='text-warning'>Poduct Cost:{product.product_cost}</p>

        <form action="" onSubmit={submit}>
            <p className='text-warning'>{loading}</p>
            <p className='text-success'>{message}</p>
            <p className='text-danger'>{error}</p>
            <input type="tel" placeholder='254XXXXXXXXX' value={phone} onChange={(e)=>setPhone(e.target.value)} className='form-control'/>
            <br />
            <br />
            <button className='btn btn-dark' type='submit'>Make Payment</button>
        </form>
    </div>    

    </div>
  )
}

export default MakePayments