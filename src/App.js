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
  const [ selectedSection, setSelectedSection] = useState('intro');
  return (
    <div className="App">
      <Navbar setSelectedSection={setSelectedSection}/>
      
      <div className="content">

        {/* <Element name='intro'>
          {selectedSection === 'intro' && (
           <Intro/> 
          )}
        </Element>
      

        <Element name='skills'>
          {selectedSection === 'skills' && (
              <Skills/>
          )}
        </Element> */}
        <Intro/>
        <AboutMe />
        <Skills/>
        <Certification />
        <Works/>
        <Contact/>

        {/* <Element name='certificationSection'>
          {selectedSection === 'certificationSection' && (
              <Certification />
          )}
        </Element>

        <Element name='works'>
          {selectedSection === 'works' && (
            <Works/>
          )}
        </Element>

        
        <Element name='contact'>
          {selectedSection === 'contact' && (
            <Contact/>
          )}
        </Element> */}

        <Element name='footer'>
        <Footer/>  
        </Element>
    </div>   
    </div>
  );
}

export default App;

