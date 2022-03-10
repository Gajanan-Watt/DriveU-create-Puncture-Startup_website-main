
import React from 'react'
import {Routes,Route, Link} from 'react-router-dom'
import { Cartpage } from '../Cartpage/Cartpage'
import { Homepage } from '../Homepage'
import Login from '../Login/Login'
import { Main } from '../Main/Main'
import { Navbar } from '../Navbar'
import { Ordersuccess } from '../Ordersuccess/Ordersuccess'

export const Router = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Routes>
            <Route path="/" element={<Main />} ></Route>
            <Route path="/main" element={<Homepage />} ></Route>
            <Route path="/cartpage" element={<Cartpage />} ></Route>
            <Route path="/login" element={<Login />} ></Route>
            <Route path="/success" element={<Ordersuccess />} ></Route>
        </Routes>
    </div>
  )
}

