import React from 'react'
import "../styling/home.css"
import ellipse1 from "../assets/Ellipse 1upper.png"
import ellipse2 from "../assets/Ellipse 2lower.png"
import logo from "../assets/logo.svg";
import home from "../assets/home.svg";
// import person from "../assets/govinda.jpg";
import chats from "../assets/chats.svg";
// import Eprofile from "../assets/edit-profile.svg";
// import offline from "../assets/offline-download.svg";
import profile from "../assets/profile.svg";
// import person from "../assets/person.png";

function Home() {
  return (
      <div className='home'>
       
        <div className='ellipse01'>
          <p className='hom'>Home</p>
                <img src={ellipse1} alt="" />
            </div>
            <div className="logo1">
            <div className="log1">
               <img src={logo} alt="" />
            </div>
        </div>
         {/* footer  */}
            <div className='ellipse02'>
                <img src={ellipse2} alt="" />
        </div>
        {/* team area  */}
        <div className="team">
          <div className="rec1">
            <div className="f1">
              <p>12:00-1:00
              <br/>Friday<br/>
              23 oct 2023</p>
              <button>Join</button>
            </div>
            <div className='line'></div>
            <div className="f2">
            <p>Blockchain & <br/> AI in Digital <br/> Marketing</p>
              <button>History</button>
            </div>
          </div>
          <div className="rec2">
            <div className='leader1'>
            <div className="img">
              {/* <img src={person} /> */}
              {/* img */}
            </div>
            <p >Kapil Arya</p>
            </div>
            <p>Blockchain | AI expert <br/> wipro.inc</p>
          </div>
          <div className="rec3">
          <div className='leader2'>
            <div className="img1">
              {/* <img src={person} /> */}
              {/* img */}
            </div>
            <p >Akshat Verma</p>
            </div>
            <p>B-Tech | CSE</p>
          </div>
          <div className="rec4">
          <div className='leader3'>
            <div className="img2">
              {/* <img src={person} /> */}
              {/* img */}
            </div>
            <p >Chirag</p>
            </div>
            <p>B-Tech | CSE</p>
          </div>
          <div className="rec5">
          <div className="h">
            <a href='/home'><img src={home} alt="" /></a>
            </div>
            <div className="m">
             <a href='/chats'><img src={chats} alt="" /></a>
            </div>
            <div className="p">
            <a href='/profile'><img src={profile} alt="" /></a>
            </div>
          </div>
        </div>

        
      </div>
  )
}

export default Home