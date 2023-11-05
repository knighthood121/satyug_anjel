import React from 'react'
import ellipse1 from "../assets/Ellipse 1upper.png"
import ellipse2 from "../assets/Ellipse 2lower.png"
import logo from "../assets/logo.svg";
function Offline_download() {
  return (
    <>
     <div className='chats'>
       
       <div className='ellipse0001'>
         <p className='cha'>offline</p>
               <img src={ellipse1} alt="" />
           </div>
           <div className="logo001">
           <div className="log001">
              <img src={logo} alt="" />
           </div>
       </div>
           <div className='ellipse0002'>
               <img src={ellipse2} alt="" />
       </div>

       </div>
    </>
  )
}

export default Offline_download