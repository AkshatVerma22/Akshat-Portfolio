import React from 'react'
import img from "../assets/pfp.jpg";
import pfp from '../assets/pf.jpg'
import resume from '../assets/Resume_AkshatVerma.pdf'
const Home = () => {
  return (
    <>
     <div className="card ">
        <img src={pfp} style={{width:'fit-content',height:'fit-content'}}/>
        <div>
          <h2>Akshat Verma</h2>
          <h3 style={{ color: "white", padding: "10px", fontFamily:'Gruppo',fontWeight:'bold' }}>
          I am currently a pre-final Year Computer Science Engineering student pursuing a Bachelor of Technology degree from the prestigious Vellore Institute of Technology, Chennai
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
        <a href={resume} download={resume}>
            <button className="button" type="button" >
              <span className="button__text" >Download Resume</span>
              <span className="button__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                  id="bdd05811-e15d-428c-bb53-8661459f9307"
                  data-name="Layer 2"
                  className="svg"
                >
                  <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z" />
                  <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z" />
                  <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z" />
                </svg>
              </span>
            </button>
            </a>
        </div>
      </div>
    </>
  )
}

export default Home
