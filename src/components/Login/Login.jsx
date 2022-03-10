import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Navbar } from "../Navbar";

import styled from "./Login.module.css";
let obj = {
  name: "",
  email: "",
  passowrd: "",
  phone: ""
};
const Login = () => {
  const [info, setInfo] = useState(obj);
  const [flag, setFlag] = useState(false);
  const handleChange = (e) => {
    let { name, value } = e.target;
    let payload = {
      ...info,
      [name]: value
    };
    setInfo(payload);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(true);
  };
  return (
    <div>
    {/* <Navbar /> */}
    <div >
        <Link to="/">
           <img style={{width:"10%"}} src="https://scontent.fhyd2-1.fna.fbcdn.net/v/t1.18169-9/19396633_670861676371809_4793018820059257121_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WL6jSjt5-DYAX_GGSRS&_nc_ht=scontent.fhyd2-1.fna&oh=00_AT8RinpitQ-uoxoNzWmtZ5wRrgKXrwNh2upbtqp1CIz9Jg&oe=624D9A79" alt="logo" />
           </Link>
        </div>
      <div className={styled.outer}>
        <div>
          <div className={styled.margin1}>Name :-</div>
          <input
            className={styled.margin}
            onChange={(e) => handleChange(e)}
            name="name"
            type="text"
          />
        </div>
        <div>
          <div className={styled.margin1}>Email :-</div>
          <input
            className={styled.margin}
            onChange={(e) => handleChange(e)}
            name="email"
            type="email"
          />
        </div>
        <div>
          <div className={styled.margin1}>Phone Number :-</div>
          <input
            className={styled.margin}
            onChange={(e) => handleChange(e)}
            name="phone"
            type="text"
          />
        </div>

        <div>
          <div className={styled.margin1}>Password :-</div>
          <input
            className={styled.margin}
            onChange={(e) => handleChange(e)}
            name="password"
            type="password"
          />
        </div>
        <button className={styled.btn} onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
        {flag ? <Navigate to="/success" /> : ""}
      </div>
    </div>
  );
};

export default Login;