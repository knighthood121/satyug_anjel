import React from "react";
import "../styling/login.css";
import ellipse1 from "../assets/Ellipse 1upper.png";
import ellipse2 from "../assets/Ellipse 2lower.png";
import logo from "../assets/logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Log_in() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  function login() {
    let data = { email, password };
    console.warn(data);
    console.warn({ email, password });
    axios
      .post("http://localhost:4044/login", data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        console.warn(result);
        Navigate("/Home");
      })
      .catch((error) => {
        // console.log(error);
      });
  }
  return (
    <div className="main">
      <div className="ellipse1">
        <img src={ellipse1} alt="" />
      </div>
      <div className="logo">
        <div className="log">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="log_in">
        <p>Log in</p>
        <input
          type="Email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          placeholder="Email"
          className="email"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          placeholder="Password"
          className="password"
        />
        <div className="rec">
          <button onClick={login}>LOG IN</button>
        </div>
      </div>
      <div className="ellipse2">
        <img src={ellipse2} alt="" />
      </div>
    </div>
  );
}

export default Log_in;
