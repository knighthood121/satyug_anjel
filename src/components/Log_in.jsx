import React from 'react'
import "../styling/login.css"
import ellipse1 from "../assets/Ellipse 1upper.png"
import ellipse2 from "../assets/Ellipse 2lower.png"
import logo from "../assets/logo.svg";
function Log_in() {
  return (
    <div className="main">
           <div className='ellipse1'>
                <img src={ellipse1} alt="" />
        </div>
        <div className="logo">
            <div className="log">
               <img src={logo} alt="" />
            </div>
        </div>
        <div className='log_in'>
         
        <p>Log in</p>
        <input type="Email" placeholder='Email' className='email' required/>
      
        <input type="password" placeholder='Password' className='password'/>
         <div className='rec'>
          <button>LOG IN</button>
         </div>
        </div>
        <div className='ellipse2'>
                <img src={ellipse2} alt="" />
        </div>
    </div>
  )
}

export default Log_in