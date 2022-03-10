import React from 'react'
import {FaUserAlt} from "react-icons/fa"
import {BsCartFill} from "react-icons/bs"
import { Link } from 'react-router-dom'

export const  Navbar = () =>  {
  const cart = JSON.parse(localStorage.getItem("punctureCart"));
  return (
    <div className='navbar'>
        <div >
        <Link to="/main">
           <img src="https://scontent.fhyd2-1.fna.fbcdn.net/v/t1.18169-9/19396633_670861676371809_4793018820059257121_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WL6jSjt5-DYAX_GGSRS&_nc_ht=scontent.fhyd2-1.fna&oh=00_AT8RinpitQ-uoxoNzWmtZ5wRrgKXrwNh2upbtqp1CIz9Jg&oe=624D9A79" alt="logo" />
           </Link>
        </div>
        <div className='right'>
            <div><FaUserAlt style={{fontSize: "25px"}}/></div>
            <div><Link to="/cartpage"><BsCartFill  style={{fontSize: "25px",textDecoration:"none",color:"black"}}/></Link></div>
        </div>
        
    </div>
  )
}

