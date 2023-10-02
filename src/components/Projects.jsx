import React from "react";
import "./projects.css";
import "./About.css";
import { Tag, Box, Spacer,Image } from "@chakra-ui/react";
import blockchain from "../assets/blockchain.png";
import sirius from "../assets/sirius.png";
import infyinite from "../assets/infyinite.png";
import weather from "../assets/weather.png";
import chatgpt from "../assets/chatgpt.jpg";
import ctc from "../assets/ctc.png";
import portfolio from "../assets/potfolio.png";
import infinity from "../assets/infinity.png";
import eyp from "../assets/eyp.jpg";
import qr from '../assets/QR.png'
const Card = ({
  title,
  body,
  author,
  date,
  link,
  img,
  tag1,
  tag2,
  tag3,
  tag4,
  tag5,
  tag6,
  tag7,
  tag8,
  tag9,
  tag10,
  id,
}) => {
  return (
    <>
      <div className="project">
        <div className="card-image">
          <img src={img} alt="" style={{ width: "100%" }} />
        </div>
        <p className="card-title">{title}</p>
        <p className="card-body">{body}</p>

        <Tag
          fontSize={"10px"}
          className="tech-stack"
          color={"orange"}
          border={"1px solid orange"}
          backgroundColor={'whiteAlpha.200'}
        >
          {tag1}
        </Tag>
        <Tag
          fontSize={"10px"}
          className="tech-stack"
          color={"blue.300"}
          border={"1px solid"}
          backgroundColor={'whiteAlpha.200'}
        >
          {tag2}
        </Tag>
        <Tag
          fontSize={"10px"}
          className="tech-stack"
          color={"yellow"}
          border={"1px solid"}
          backgroundColor={'whiteAlpha.200'}
        >
          {tag3}
        </Tag>
        {id === 2 || id === 1 ? (
          <Tag
            fontSize={"10px"}
            className="tech-stack"
            color={"purple.400"}
            border={"1px solid"}
            backgroundColor={'whiteAlpha.200'}
          >
            {tag4}
          </Tag>
        ) : null}
        {id === 2 || id === 5 ? (
          <Tag
            fontSize={"10px"}
            className="tech-stack"
            color={"green.400"}
            border={"1px solid"}
            backgroundColor={'whiteAlpha.200'}
          >
            {tag5}
          </Tag>
        ) : null}

        {id === 2 ? (
          <Tag
            fontSize={"10px"}
            className="tech-stack"
            color={"green.600"}
            border={"1px solid"}
            backgroundColor={'whiteAlpha.200'}
          >
            {tag6}
          </Tag>
        ) : null}
        {id === 4 || id === 5 ? (
          <Tag
            fontSize={"10px"}
            className="tech-stack"
            color={"aqua"}
            border={"1px solid"}
            backgroundColor={'whiteAlpha.200'}
          >
            {tag7}
          </Tag>
        ) : null}

        {id === 4 ? (
          <Tag
            fontSize={"10px"}
            className="tech-stack"
            color={"red.600"}
            border={"1px solid"}
            backgroundColor={'whiteAlpha.200'}
          >
            {tag8}
          </Tag>
        ) : null}

        {id === 5 ? (
          <Tag
            fontSize={"10px"}
            className="tech-stack"
            color={"blue.200"}
            border={"1px solid"}
            backgroundColor={'whiteAlpha.200'}
          >
            {tag9}
          </Tag>
        ) : null}

        {id === 5 ? (
          <Tag fontSize={"10px"} className="tech-stack" border={"1px solid"} backgroundColor={'whiteAlpha.200'}>
            {tag10}
          </Tag>
        ) : null}

        <br />
        <button className="visit">
          {" "}
          <a href={link}>View Project</a>
        </button>

        {/* <p className="foot">Written by <span className="by-name">{author}</span>  on <span className="date">{date}</span></p> */}
      </div>
    </>
  );
};

const CardList = () => {
  const cards = [
    {
      id: 1,
      img: [blockchain],
      title: "Blockchain Development Roadmap",
      body: "developed a comprehensive website that serves as a roadmap for individuals interested in becoming blockchain developers and starting their journey in blockchain development. The website provides step-by-step guidance, resources, and learning materials to help aspiring developers acquire the necessary skills and knowledge in blockchain technology. From understanding the fundamentals of blockchain to learning programming languages and frameworks specific to blockchain development, the website covers all aspects of becoming a proficient blockchain developer. By providing a structured and informative roadmap, we aim to empower individuals to enter the exciting field of blockchain development and contribute to the advancement of this transformative technology.",
      author: "John Doe",
      date: "25/05/23",
      link: "https://portfolio-nine-peach-91.vercel.app/",
      tag1: "Html",
      tag2: "CSS",
      tag3: "JavaScript",
      tag4: "Bootstrap",
    },
    {
      id: 2,
      img: [sirius],
      title: "NGO website",
      body: "I have developed a social service website during a 24 hours hackathon aimed at addressing the lack of modern technology and communication problems faced by people living in rural areas. The website provides a platform for individuals to connect with each other, share information, and access resources that are typically unavailable in rural areas. My team's technical expertise in web development and user experience design allowed us to create an intuitive and user-friendly website that effectively meets the needs of our target audience. By leveraging the power of technology, we hope to bridge the digital divide and provide rural communities with the tools and resources they need to thrive in today's interconnected world.",
      link: "https://github.com/AkshatVerma22/HackOverflow-TeamSirius",
      tag1: "Html",
      tag2: "CSS",
      tag3: "JavaScript",
      tag4: "Bootstrap",
      tag5: "NodeJS",
      tag6: "MongoDB",
    },
    {
      id: 3,
      img: [infyinite],
      title: "InFYInite event website",
      body: "I developed the frontend for a live polling website that was used by over 850 participants during an event. The website was designed to provide a user-friendly and interactive platform for participants to engage in real-time polls and surveys. My team's expertise in frontend development and user experience design allowed us to create a visually appealing and responsive website that effectively met the needs of our participants. By leveraging the latest web technologies and design principles, we were able to deliver a high-quality product that received positive feedback from the users helping us to host a successful event. ",
      link: "https://www.linkedin.com/posts/akshat-verma-6b6038247_infyinite-fyi-vibrance-activity-7042914962041704448-dZKK?utm_source=share&utm_medium=member_desktop",
      tag1: "Html",
      tag2: "CSS",
      tag3: "JavaScript",
    },
    {
      id: 4,
      img: [weather],
      title: "Weather app",
      body: "I have successfully developed a web application that predicts weather conditions for any location using the OpenWeatherMap API. The application is designed to provide users with up-to-date information on temperature, humidity, wind speed, and other climatic conditions in real-time ",
      link: "https://github.com/AkshatVerma22/weather-react-app",
      tag1: "Html",
      tag2: "CSS",
      tag3: "JavaScript",
      tag7: "ReactJS",
      tag8: "Open weather map api",
    },
    {
      id: 5,
      img: [chatgpt],
      title: "Chat GPT clone",
      body: "I successfully developed a chatbot GPT-3 clone on a local server using the OpenAI API. The chatbot was designed to mimic human-like conversation and provide users with helpful and informative responses ",
      link: "https://github.com/AkshatVerma22/weather-react-app",
      tag1: "Html",
      tag2: "CSS",
      tag3: "JavaScript",
      tag5: "NodeJS",
      tag7: "ReactJS",
      tag9: "TailWind CSS",
      tag10: "OpenAI API",
    },
    {
      id: 6,
      img: [ctc],
      title: "Live countdown timer",
      body: "Developed a simple yet effective live countdown timer for a 'Crack the Code' event. The timer was designed to showcase the remaining time until the event started, creating anticipation and excitement among participants. The timer was seamlessly integrated into the event's website, providing real-time updates and helping to keep participants informed and engaged",
      link: "https://ctc-rouge.vercel.app/",
      tag1: "Html",
      tag2: "CSS",
      tag3: "JavaScript",
    },
    {
      id: 7,
      img: [portfolio],
      title: "Portfolio Website",
      body: "Previously, I created an impressive personal portfolio website that featured various animations and effects. The website was designed to showcase my skills and accomplishments in a visually captivating and interactive manner. The site's unique design and engaging features helped me stand out among other professionals in my field, and provided potential employers or collaborators with a comprehensive overview of my work. This was a remarkable achievement that showcases my creativity and technical skills in web development. ",
      link: "https://portfolio-nine-peach-91.vercel.app/",
      tag1: "Html",
      tag2: "CSS",
      tag3: "JavaScript",
    },
    {
      id: 8,
      img: [infinity],
      title: "Infinity architects",
      body: "Developed a website tailored specifically for an esteemed architectural firm. The website showcases the firm's portfolio, expertise, and services, providing visitors with a visually captivating and user-friendly experience. With seamless navigation and compelling visuals, the website effectively highlights the firm's unique architectural designs and helps attract potential clients and collaborators. ",
      link: "https://infinity-architect.vercel.app/",
      tag1: "Html",
      tag2: "CSS",
      tag3: "JavaScript",
    },

    {
      id: 9,
      img: [eyp],
      title: "Elevate your portfolio",
      body: "Developed a webiste dedicated to showcasing the live charts utilized by 50 participating teams during the event. The website served as a platform for participants to observe and analyze the chart patterns of various dummy stocks and place their bets on the stocks provided and gain valuable insights throughout the duration of the event. ",
      link: "https://elevate-your-portfolio.vercel.app/",
      tag1: "Html",
      tag2: "CSS",
      tag3: "JavaScript",
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // flexWrap: "wrap",
          width: "60%",
          
        }}
      >
        <Box className="about" p="8" m={"40px"}>
          <h1>Projects</h1>
        </Box>
        <Spacer />

        <div className="experience">
          <div className="item item--1">
          <i className="fa-solid fa-list-check" style={{fontSize:'25px'}}></i>
            <span className="quantity"> 30+ </span>
            <span className="text text--1"> Projects </span>
          </div>
          <div className="item item--2">
          <i  class="icon fa-solid fa-calendar" style={{fontSize:'25px'}}></i>{" "}
            <span className="quantity"> 1 year+ </span>
            <span className="text text--2">Experience</span>
          </div>
          <div className="item item--3">
          <i className="fa-solid fa-layer-group" style={{fontSize:'25px'}}></i>
            <span className="quantity"> 10+ </span>
            <span className="text text--3" > Skills </span>
          </div>
          <div className="item item--4">
          <i className="fa-solid fa-award" style={{fontSize:'25px'}}></i>
            <span className="quantity"> 10+ </span>
            <span className="text text--4">Achievements </span>
          </div>
        </div>
      </div>

      <br />
      <p style={{ margin: "40px",color:'white' }}>
        As a developer, I believe that the best way to learn and master a skill
        is by building as many projects as possible. <br />
        As you build more projects, you gain practical experience and develop
        problem-solving skills, which are essential for any developer.
        Additionally, working on different projects allows you to explore
        different areas of your field, and learn about new tools and
        technologies that can help you work more efficiently. <br /> Moreover,
        encountering errors and overcoming challenges during the project
        development process provides valuable learning opportunities and helps
        you become more versatile in your skillset.{" "}
      </p>
      <Spacer />
      <div style={{ display: "flex", margin: "40px", flexWrap: "wrap" }}>
        {cards.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            body={project.body}
            author={project.author}
            link={project.link}
            date={project.date}
            img={project.img}
            tag1={project.tag1}
            tag2={project.tag2}
            tag3={project.tag3}
            tag4={project.tag4}
            id={project.id}
            tag5={project.tag5}
            tag6={project.tag6}
            tag7={project.tag7}
            tag8={project.tag8}
            tag9={project.tag9}
            tag10={project.tag10}
          />
        ))}
      </div>
      <div style={{width:'100%',justifyContent:'center'}}>
        <Image  src={qr} width={'20%'} margin={'auto'} borderRadius={'20px'} style={{border:'2px dotted aqua'}}>

        </Image>
        <h3 style={{width:'100%',textAlign:'center',marginTop:'20px',fontFamily:'Black Ops One',color:'white'}}>Scan QR to view GitHub</h3>
      </div>
    </>
  );
};

export default CardList;
