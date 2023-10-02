import React from 'react'
import img from "../assets/pfp.jpg";
import pfp from '../assets/pf.jpg'
const Home = () => {
  return (
    <>
     <div className="card ">
        <img src={pfp} style={{width:'fit-content'}}/>
        <div>
          <h2>Akshat Verma</h2>
          <h3 style={{ color: "white", padding: "10px", fontFamily:'Gruppo',fontWeight:'bold' }}>
          I am currently a pre final Year Computer Science Engineering student pursuing a Bachelor of Technology degree from the prestigious Vellore Institute of Technology, Chennai
          </h3>
         

          <a
            className="social"
            href="https://github.com/AkshatVerma22"
           
          >
            <i class="fa-brands fa-github fa-beat" ></i>
          </a>
          <a
            className="social"
            href="https://www.linkedin.com/in/akshat-verma-6b6038247/"
           
          >
           <i class="fa-brands fa-linkedin fa-beat"></i>
          </a>
   

          <a
            className="social"
            href="mailto:akshat.verma2208@gmail.com"
          
          >
           <i class="fa-regular fa-envelope fa-beat"></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default Home