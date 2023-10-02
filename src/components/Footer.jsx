import React from "react";
import { Divider } from "@chakra-ui/react";

import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
      <marquee behavior="scroll" direction="left" className='marquee'>
               
              

               <div className="marquee__item" >
                 Akshat Verma
                 <span className="marquee__seperator">•</span>
                 <i
                       className="fa-brands fa-html5 fa-beat"
                       style={{ color: "white", margin: "4px", fontSize: "25px" }} 
                     ></i>
     
                 <span className="marquee__seperator">•</span>
                 Student
                 <span className="marquee__seperator">•</span>
                 <i
                       class="fa-brands fa-css3-alt fa-beat"
                       style={{ color: "white", margin: "4px", fontSize: "25px" }}
                     ></i>
                 <span className="marquee__seperator">•</span>
                Developer
                 <span className="marquee__seperator">•</span>
                 <i
                       class="fa-brands fa-js fa-beat"
                       style={{ color: "white", margin: "4px", fontSize: "25px" }}
                     ></i>
                 <span className="marquee__seperator">•</span>
                 Tech-Enthusiast
                 <span className="marquee__seperator">•</span>
                 <i
                       class="fa-brands fa-react fa-spin"
                       style={{ color: "white", margin: "4px", fontSize: "25px" }}
                     ></i>
                      <span className="marquee__seperator">•</span>
               </div>
               <div className="marquee__item">
                 Akshat Verma
                 <span className="marquee__seperator">•</span>
                 <i
                       className="fa-brands fa-html5 fa-beat"
                       style={{ color: "white", margin: "4px", fontSize: "25px" }}
                     ></i>
     
                 <span className="marquee__seperator">•</span>
                 Student
                 <span className="marquee__seperator">•</span>
                 <i
                       class="fa-brands fa-css3-alt fa-beat"
                       style={{ color: "white", margin: "4px", fontSize: "25px" }}
                     ></i>
                 <span className="marquee__seperator">•</span>
                Developer
                 <span className="marquee__seperator">•</span>
                 <i
                       class="fa-brands fa-js fa-beat"
                       style={{ color: "white", margin: "4px", fontSize: "25px" }}
                     ></i>
                 <span className="marquee__seperator">•</span>
                 Tech-Enthusiast
                 <span className="marquee__seperator">•</span>
                 <i
                       class="fa-brands fa-react fa-spin"
                       style={{ color: "white", margin: "4px", fontSize: "25px" }}
                     ></i>
                      <span className="marquee__seperator">•</span>
               </div>
               </marquee>

        <Divider />
        <div className="brands">
       
        <h2 style={{margin:'10px',color:'white'}}>Made using 
        <i class="icons fa-brands fa-html5"></i> /
        <i class="icons fa-brands fa-css3-alt"></i> /
        <i class="icons fa-brands fa-square-js"></i> /
        <i class="icons fa-brands fa-react"></i> /
        <i class="icons fa-solid fa-bolt"></i>
        </h2>
        <h4>© 2023 Akshat Verma. All rights reserved.</h4>
        </div>
      </div>
    </>
  );
};

export default Footer;
