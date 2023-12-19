import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Certification from "./components/Certifications/certification";
import AboutMe from "./components/About/about";
import React, { useState } from 'react';
import {Element} from 'react-scroll';



function App() {
  // eslint-disable-next-line no-unused-vars
  const [ selectedSection, setSelectedSection] = useState('intro');
  
  
  return (
    <div className="App">
      <Navbar setSelectedSection={setSelectedSection}/>
      
      <div className="content">
        <Intro/>
        <AboutMe />
        <Skills/>
        <Certification />
        <Works/>
        <Contact/>
        <Element name='footer'>
        <Footer/>  
        </Element>
    </div>   
    </div>
  );
}

export default App;

