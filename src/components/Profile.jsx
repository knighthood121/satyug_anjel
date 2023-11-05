import React from 'react'
import "../styling/profile.css"
import ellipse1 from "../assets/Ellipse 1upper.png"
import ellipse2 from "../assets/Ellipse 2lower.png"
import logo from "../assets/logo.svg";
import home from "../assets/home.svg";
import person from "../assets/govinda.jpg";
import chats from "../assets/chats.svg";
import Eprofile from "../assets/edit-profile.svg";
import offline from "../assets/offline-download.svg";
import profile from "../assets/profile.svg";
import sechedule from "../assets/sechedule.svg";
import logout from "../assets/log-out.svg";





function Profile() {
  return (
      <div className='profile'>
       
        <div className='ellipse001'>
          <p className='pro'>Profile</p>
                <img src={ellipse1} alt="" />
            </div>
            <div className="logo01">
            <div className="log01">
               <img src={logo} alt="" />
            </div>
        </div>
            <div className='ellipse002'>
                <img src={ellipse2} alt="" />
        </div>
           {/* profile container  */}
           <div className="Pcontainer">
            <img src={person} alt="" />
           </div>
           <div className="P_person">
            <p >Kapil Arya</p>

           </div>
           {/* profile function  */}
           <div className="Pfunction">
            <div className="fd">
              <p>Offline Download</p>
              <img src={offline} alt="" />
            </div>
            <div className="ep">
              <p>Edit Profile</p>
              <img src={Eprofile} alt="" />
            </div>
            <div className="sc">
              <p>Schedule</p>
              <img src={sechedule} alt="" />
            </div>
            <div className="lg">
              <p>Log out</p>
              <img src={logout} alt="" />
            </div>
            <div className="rec6">
            <div className="h">
            <a href='/home'><img src={home} alt="" /></a>
            </div>
            <div className="m">
             <a href='/chats'><img src={chats} alt="" /></a>
            </div>
            <div className="p">
            <a  href='/profile'><img src={profile} alt="" /></a>
            </div>
          </div>
           </div>

      </div>
  )
}

export default Profile