import { NavLink, useLocation,Router,Link ,Route} from "react-router-dom";
import { Switch } from "react";
import Home from './Home';
import About from './About';
import Projects from './Projects'
const Header = () => {
  const location = useLocation();

  return (
    <>

<nav style={{display:'flex'}}>
    <ul className="navigation">
        <li className="navigation__item dropdown">
            <Link className="navigation__link dropdown-icon" >
                <span className="hamburger-icon"></span>
            </Link>
            <ul className="dropdown-menu show" >
                <li className="navigation__item-1">
                    <Link className="navigation__link-1" to="/" data-text="Home">Home</Link>
                </li>
                <li className="navigation__item-1">
                    <Link className="navigation__link-1" to="/About" data-text="About">About</Link>
                </li>
                <li className="navigation__item-1">
                    <Link className="navigation__link-1" to="/Projects" data-text="Projects">Projects</Link>
                </li>
                <li style={{display:'flex',margin:'10px'}} className="nav-social">
                <a
            className="social"
            href="https://github.com/AkshatVerma22"
           
          >
            <i class="fa-brands fa-github " ></i>
          </a>
          <a
            className="social"
            href="https://www.linkedin.com/in/akshat-verma-6b6038247/"
           
          >
           <i class="fa-brands fa-linkedin "></i>
          </a>
   

          <a
            className="social"
            href="mailto:akshat.verma2208@gmail.com"
          
          >
           <i class="fa-regular fa-envelope "></i>
          </a>
                </li>
            </ul>
        </li>
       
    </ul>
    <button data-text="Awesome" className="button-logo">
  <span className="actual-text">&nbsp;Akshat&nbsp;</span>
  <span className="hover-text" aria-hidden="true">&nbsp;Akshat&nbsp;</span>
</button>

</nav>

  
      
        <marquee behavior="scroll" direction="left" className='marquee'>
               
              

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

   
    </>
  );
};

export default Header;
