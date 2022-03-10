import { useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "./Main.module.css";

export const Main = () => {
  let [flag, setFlag] = useState(false);
  return (
    <div className={styled.home}>
      <h1 className={styled.h1}>Welcome To Tyre Garage</h1>
      <button className={styled.btn} onClick={() => setFlag(true)}>
        Services
      </button>
      {flag ? <Navigate to="/main" /> : ""}
    </div>
  );
};
