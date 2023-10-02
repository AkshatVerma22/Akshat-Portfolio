import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SiCplusplus } from "@react-icons/all-files/si/SiCplusplus";
import { SiCodio } from "@react-icons/all-files/si/SiCodio";
import { GrMysql } from "@react-icons/all-files/gr/GrMysql";
import { GrSystem } from "@react-icons/all-files/gr/GrSystem";
import { FaNetworkWired } from "@react-icons/all-files/fa/FaNetworkWired";
import { CheckCircleIcon } from "@chakra-ui/icons";
import gdsc from '../assets/gdsc.webp'
import {
  Flex,
  Box,
  Spacer,
  Text,
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Divider,
  ButtonGroup,
  Tag,
  Avatar,
  TagLabel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import "./header.css";
import "./About.css";
import "./circle.css";
import DSC from "../assets/dsc.jpg";
import Fyi from "../assets/fyi.png";
import IEEE from "../assets/ieee.png";
import Hackoverflow from "../assets/event-logo.webp";
import GDSC from "../assets/gdsc.webp";
import "./skills.css";

const About = () => {
  return (
    <>
    
      <Flex overflowX={"hidden"} p={"3"}>
        <Box className="about" p="8" m={"40px"}>
          <h1>About</h1>
        </Box>
        <Spacer />
        <div className="wrapper">
          <div className="animated-circle-text">
            <svg viewBox="0 0 244.1 244.1">
              <path
                id="circlePath"
                d="M226.6,122.1c0,57.7-46.8,104.5-104.5,104.5S17.6,179.8,17.6,122.1S64.4,17.6,122.1,17.6
  S226.6,64.4,226.6,122.1z"
                fill="transparent"
              />
              <text>
                <textPath xlinkHref="#circlePath">
                  . Akshat Verma . Student . Developer .
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </Flex>

      <div className="box" id='about'>
        <div className="code-editor">
          <div className="header">
            <span className="title">
              {" "}
              <i
                class="fa-brands fa-react fa-spin"
                style={{ color: "aqua", margin: "4px", fontSize: "20px" }}
              ></i>
              About.jsx{" "}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="icon"
            >
              <g strokeWidth={0} id="SVGRepo_bgCarrier" />
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                id="SVGRepo_tracerCarrier"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeWidth={2}
                  stroke="#4C4F5A"
                  d="M6 6L18 18"
                />{" "}
                <path
                  strokeLinecap="round"
                  strokeWidth={2}
                  stroke="#4C4F5A"
                  d="M18 6L6 18"
                />{" "}
              </g>
            </svg>
          </div>
          <div className="editor-content">
            <code className="code">
              <p>
                <span className="const">const</span>
                <span className="aboutMe"> aboutMe</span> ={" "}
                <span className="pink">( ) </span>{" "}
                <span className="const">=></span>{" "}
                <span className="pink">[ </span> <br />
                <span>
                  <span className="pink">return (</span> <br />
                  Hello,I am Akshat Verma. As you must have guessed it already,
                  I am a CSE core student at VIT-Chennai and a Web-developer. I
                  specialize in the frontend development, primarily HTML, CSS,
                  JS, ReactJs and few UI tools but i love building with whatever
                  tools are right for the job. <br /> <br />
                  Apart from development, I am a tech enthusiast, active
                  volunteer, event manager, athelete, football player, rapper,
                  hodophile and a semi-pro gamer! <br />
                  <br />
                  If you are interested in learning more about my skills, work experience, educational background, projects, and contact information, you can find it all here. Thank you for taking the time to get to know me better.
                  <br />
                  <span className="pink">) ] </span>
                </span>
                <br />
                <span className="aboutMe">aboutMe</span>
                <span className="pink">( )</span>
              </p>
            </code>
          </div>
          <br />
        </div>

        <Card
          className="work"
          backgroundColor={'#2525255c'}
          style={{ boxShadow: "0px 4px 30px rgba(0, 0, 0, 1)",color:'white' }}
        >
          <CardBody>
            <h3 className="WorkExperience">
              Work Experience <span> </span>
              <i class="fa-solid fa-briefcase"></i>
            </h3>
            <Divider></Divider>
            <ul>
              <div className="club-info">
                <li>
                  <Avatar
                    className="logo"
                    src={DSC}
                    size="sm"
                    padding={"3px"}
                  />
                </li>
                <p>Core Development Team Member</p>
              </div>
              <p className="club-name">Data Science Club</p>
              <p className="club-date">August 2022 - June 2023 </p>

              <div className="clubs">
                <Accordion
                  className="contri"
                  defaultIndex={[1]}
                  allowMultiple
                  width={"100%"}
                >
                  <AccordionItem>
                    <AccordionButton>
                      <Box>
                        <Tag fontSize={"8px"} backgroundColor={'whiteAlpha.300'} color={'white'}>View Contributions</Tag>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel>
                      <List spacing={3}>
                        <ListItem>
                          <p>
                            {" "}
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Built a weather prediction web application using
                            Reactjs and open weather map API to predict the
                            weather conditions and temperature of any location{" "}
                            <br />
                          </p>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            HTML
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            CSS
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Reactjs
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Open weather map API
                          </Tag>
                          <br />
                        </ListItem>
                        <ListItem>
                          <p>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Created a full stack chat application interface and
                            server side of the application for a Don't laugh ML
                            based challenge for a club event which takes user
                            input and roasts them in order to make them laugh
                          </p>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            HTML
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            CSS
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Reactjs
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            NodeJs
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Open AI API
                          </Tag>
                        </ListItem>
                      </List>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="club-info">
                <li>
                  <Avatar
                    src={Fyi}
                    className="logo"
                    size="sm"
                    backgroundColor={"#00000090"}
                    padding={"3px"}
                  />
                </li>
                <p>Core Tech team and OC member</p>
              </div>
              <p className="club-name">Fraternity of young innovators</p>
              <p className="club-date">October 2022 - Present</p>
              <div className="clubs">
                <Accordion className="contri" defaultIndex={[1]} allowMultiple>
                  <AccordionItem>
                    <AccordionButton>
                      <Box>
                        <Tag fontSize={"8px"}  backgroundColor={'whiteAlpha.300'} color={'white'}>View Contributions</Tag>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel>
                      <List spacing={3}>
                        <ListItem>
                          <p>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Successfully contributed in organizing the INFYINITE
                            event for the club inviting the entreprenuers from
                            shark tank (02/2023) and created the frontend for
                            the live polling website which was used by 850+
                            participants. <br />
                            Guest Speakers : Vikram Mittal / Bhupinder Madaan /
                            Arun Agarwal
                          </p>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            HTML
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            CSS
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            JavaScript
                          </Tag>
                        </ListItem>
                        <ListItem>
                          <p>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Organizing team member for successfully conducting
                            the Sherlock 3.0 event
                          </p>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Team Work
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Event planning
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Event Managment
                          </Tag>
                        </ListItem>
                        <ListItem>
                          <p>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Successfully Organized and executed 'Crack the code
                            event' attended by 350+ participants and developed
                            the countdown timer for the event. <br /> Special
                            Guest Speaker : Shradha khapra
                            <br />
                          </p>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            HTML
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            CSS
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            JavaScript
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Event Planning
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Event Managment
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Team Work
                          </Tag>
                        </ListItem>
                        <ListItem>
                          <p>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Successfully Organized "Elevate your portfolio", a
                            stock analysis event and developed the live event
                            website used by 50 teams throughout the event.
                            <br />
                          </p>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            HTML
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            CSS
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            JavaScript
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Event Planning
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Event Managment
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Team Work
                          </Tag>
                        </ListItem>
                        <ListItem>
                          <p>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Currently contributing & managing the development of
                            the official website of the club along with the tech
                            team members.
                            <br />
                          </p>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            HTML
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            CSS
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            ReactJS
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Event Planning
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Team Work
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Leadership
                          </Tag>
                        </ListItem>
                      </List>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="club-info">
                <li>
                  <Avatar
                    className="logo"
                    src={IEEE}
                    size="sm"
                    backgroundColor={""}
                    padding={"3px"}
                  />
                </li>
                <p>Core Tech Team Member</p>
              </div>
              <p className="club-name">IEEE Computer Society</p>
              <p className="club-date">November 2022 - May 2023 </p>

              <div className="clubs">
                <Accordion
                  className="contri"
                  defaultIndex={[1]}
                  allowMultiple
                  width={"100%"}
                >
                  <AccordionItem>
                    <AccordionButton>
                      <Box>
                        <Tag fontSize={"8px"}  backgroundColor={'whiteAlpha.300'} color={'white'}>View Contributions</Tag>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel>
                      <List spacing={3}>
                        <ListItem>
                          <p>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Contributed in the DocHub project website along with
                            various team members to make people familiar with
                            various technologies & tech stacks
                            <br />
                          </p>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            HTML
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            CSS
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Reactjs
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Open weather map API
                          </Tag>
                          <br />
                        </ListItem>
                        <ListItem>
                          <p>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Contributed in the development of IEEE COMSOC
                            Student Chapter official website
                          </p>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            HTML
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Tailwind CSS
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Reactjs
                          </Tag>
                        </ListItem>
                      </List>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="club-info">
                <li>
                  <Avatar
                    className="logo"
                    src={Hackoverflow}
                    size="sm"
                    backgroundColor={"#00000090"}
                    padding={"3px"}
                  />
                </li>
                <p>Hackoverflow Hackathon</p>
              </div>
              <p className="club-name">Cyscom student chapter</p>
              <p className="club-date">October 2022</p>

              <div className="clubs">
                <Accordion
                  className="contri"
                  defaultIndex={[1]}
                  allowMultiple
                  width={"100%"}
                >
                  <AccordionItem>
                    <AccordionButton>
                      <Box>
                        <Tag fontSize={"8px"}  backgroundColor={'whiteAlpha.300'} color={'white'}>View Contributions</Tag>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel>
                      <List spacing={3}>
                        <ListItem>
                          <p>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Finalist and team lead at HackOverflow 24 hours
                            hackathon organised by Cyscom student chapter
                            <br />
                          </p>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Leadership
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Team Work
                          </Tag>

                          <br />
                        </ListItem>
                        <ListItem>
                          <p>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Successfully developed a NGO website along with my
                            team members including various elements.
                          </p>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            HTML
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            CSS
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Reactjs
                          </Tag>
                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            NodeJs
                          </Tag>
                        </ListItem>
                      </List>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="club-info">
                <li>
                  <Avatar
                    src={GDSC}
                    className="logo"
                    size="sm"
                    backgroundColor={"#00000090"}
                    padding={"3px"}
                  />
                </li>
                <p>House of developers 2.0 hackathon</p>
              </div>
              <p className="club-name">Google developers student clubs</p>
              <p className="club-date">November 2022</p>

              <div className="clubs">
                <Accordion
                  className="contri"
                  defaultIndex={[1]}
                  allowMultiple
                  width={"100%"}
                >
                  <AccordionItem>
                    <AccordionButton>
                      <Box>
                        <Tag fontSize={"8px"}  backgroundColor={'whiteAlpha.300'} color={'white'}>View Contributions</Tag>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel>
                      <List spacing={3}>
                        <ListItem>
                          <p>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Finalists at HOD 2.0 48 hours hackathon in the Data
                            science domain organised by GDSC and FYI
                            <br />
                          </p>

                         <Tag fontSize={"10px"} className="tech-stack"  backgroundColor={'whiteAlpha.300'} color={'white'}>
                            Team Work
                          </Tag>

                          <br />
                        </ListItem>
                        <ListItem>
                          <p>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Learned about few machine learning terminologies and
                            algorithms while working on a dataset with my team
                            members.
                          </p>
                        </ListItem>
                      </List>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </ul>
          </CardBody>
          <Divider />
          <CardFooter>
            <a href={gdsc} download={gdsc}>
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
          </CardFooter>
        </Card>
      </div>
      <div  style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
       <Box className="about" p="8" m={"40px"}>
          <h1 >Skills</h1>
        </Box>
        <Spacer />

    </div>
      <section
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        <div className="skills">
          
          <h2 className="dev">Development</h2>
          <ul style={{ display: "flex", flexDirection: "row" }}>
            <li>
              <button className="btn Explore">
                <i
                  className="fa-brands fa-html5 fa-flip"
                  style={{ color: "white", margin: "4px", fontSize: "20px" }}
                ></i>

                <h3>HTML</h3>
              </button>
            </li>
            <li>
              {" "}
              <button className="btn Post">
                <i
                  class="fa-brands fa-css3-alt fa-beat"
                  style={{ color: "white", margin: "4px", fontSize: "20px" }}
                ></i>
                CSS
              </button>
            </li>
            <li>
              {" "}
              <button className="btn Chat">
                <i
                  class="fa-brands fa-js"
                  style={{ color: "white", margin: "4px", fontSize: "20px" }}
                ></i>
                JavaScript
              </button>
            </li>{" "}
            <br />
            <li>
              {" "}
              <button className="btn React">
                <i
                  class="fa-brands fa-react fa-spin"
                  style={{ color: "white", margin: "4px", fontSize: "20px" }}
                ></i>
                ReactJs
              </button>
            </li>
            <li>
              <button className="btn Node">
                <i class="fa-brands fa-node-js fa-bounce"></i>
                NodeJS
              </button>
            </li>
            <li>
              <button className="btn Bs">
                <i class="fa-brands fa-bootstrap fa-beat"></i>
                Bootstrap
              </button>
            </li>
            <li>
              <button className="btn CUI ">
                <i class="fa-solid fa-bolt fa-flip"></i>
                Chakra UI
              </button>
            </li>
            <li>
              <button className="btn MUI">
                <i class="fa-brands fa-maxcdn"></i>
                Material-UI
              </button>
            </li>
          </ul>
        </div>
        <div className="skills">
          <h2 className="dev">Programming</h2>
          <ul style={{ display: "flex", flexDirection: "row" }}>
            <li>
              <button className="btn Explore">
                <i class="fa-brands fa-python fa-flip"></i>
                <h3>Python</h3>
              </button>
            </li>
            <li>
              {" "}
              <button className="btn Cpp " style={{ padding: "10px" }}>
                <SiCplusplus
                  style={{ fontSize: "20px", marginRight: "10px" }}
                  class="fa-beat"
                />
                C++
              </button>
            </li>
            <li>
              {" "}
              <button className="btn Chat" style={{ padding: "10px" }}>
                <SiCodio style={{ fontSize: "20px", marginRight: "10px" }} />C
              </button>
            </li>{" "}
            <br />
            <li>
              {" "}
              <button className="btn React">
                <i class="fa-brands fa-java fa-fade"></i>
                Java
              </button>
            </li>
          </ul>
        </div>
        <div className="skills">
          <h2 className="dev">Concepts</h2>
          <ul style={{ display: "flex", flexDirection: "row" }}>
            <li>
              <button className="btn Explore">
                <i class="fa-brands fa-linux"></i>
                <h3>Operating System</h3>
              </button>
            </li>
            <li>
              {" "}
              <button className="btn Cpp " style={{ padding: "10px" }}>
                <GrMysql
                  style={{ fontSize: "20px", marginRight: "10px" }}
                  class="fa-beat"
                />
                Database Management System
              </button>
            </li>
            <li>
              {" "}
              <button className="btn " style={{ padding: "10px" }}>
                <GrSystem
                  style={{
                    fontSize: "20px",
                    marginRight: "10px",
                    backgroundColor: "white",
                  }}
                />
                Software Engineering
              </button>
            </li>{" "}
            <br />
            <li>
              {" "}
              <button className="btn React">
                <FaNetworkWired
                  style={{ fontSize: "20px", marginRight: "10px" }}
                />
                Computer Networks
              </button>
            </li>
          </ul>
        </div>
        <div className="skills">
          <h2 className="dev">Interpersonal Skills</h2>
          <ul style={{ display: "flex", flexDirection: "row" }}>
            <li>
              <button className="btn Explore">
                <h3>Team Work</h3>
              </button>
            </li>
            <li>
              {" "}
              <button className="btn Cpp " style={{ padding: "10px" }}>
                Leadership
              </button>
            </li>
            <li>
              {" "}
              <button className="btn " style={{ padding: "10px" }}>
                Public Speaking
              </button>
            </li>{" "}
            <br />
            <li>
              {" "}
              <button className="btn React">Event Managment</button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;
