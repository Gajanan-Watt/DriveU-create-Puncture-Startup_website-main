import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../Navbar'

export const Ordersuccess = () => {
  const navigate = useNavigate();

  React.useEffect(()=>{
    setTimeout(()=>{
      alert("order successful");
      navigate("/");
    },2000);
  },[])
  return (<div >
      <Navbar />
      <h1 style={{color:"brown",textAlign: "center"}}>Order is successful</h1>
      <img style={{marginLeft : "25%"}} src={"./success.jpeg"} alt="successorder"/>
    </div>
   
  )
}

