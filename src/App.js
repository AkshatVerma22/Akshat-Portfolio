import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import image from "../src/assets/bg.jpg";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "../src/components/Projects";
import Preloader from "./components/PreLoader";
import "./components/About.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <>
      <Router>
        <ChakraProvider>
          {isLoading ? (
            <Preloader />
          ) : (
            <Box
              backdropBlur={"blur(10px)"}
              backgroundSize={"cover"}
              backgroundPosition={"center"}
              backgroundAttachment={"fixed"}
              className="background"
            >
              <main class="app">
                <div class="boxes">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </main>

              <Box backgroundColor={"#00000080"}>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Projects" element={<Projects />} />
                </Routes>
                <Footer />
              </Box>
            </Box>
          )}
        </ChakraProvider>
      </Router>
    </>
  );
}

export default App;
