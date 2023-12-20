import React from 'react';
import './intro.css';


const Intro = () => {
    
    const handleDownload = () => {
    const pdfPath = process.env.PUBLIC_URL + '/Dec 20,2023.pdf';
    window.open(pdfPath, '_blank');
    }

    const scrollToSection = () => {
      const section = document.getElementById('about-me');
      var headerOffset=75;
      var sectionPosition = section.getBoundingClientRect().top;
      var offsetPosition = sectionPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });  
    };
    
  return ( 
      <section id="intro"  > 
         <div className='introText'>
          <div className="introContent">
            <span className="hello">Hi, I'm</span>
             <span className="introName">Ramanjeet Kaur</span>
        
           <span className='btns'>
           <button className="btnResume" onClick={handleDownload} >
              My Resume
           </button> 
    
          <button className="btn" onClick={scrollToSection}>
           About Me
          </button>
          </span>  
        </div>
        </div>
        {/* <img src={bg} alt="Profile" className="bg" /> */}
      </section>
      
  )
  }

export default Intro;