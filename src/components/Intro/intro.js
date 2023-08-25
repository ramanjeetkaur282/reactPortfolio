import React from 'react';
import './intro.css';
import bg from '../../assets/raman01.jpg';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hire.png';
import resumeImg from '../../assets/hire.png'; 



const Intro = () => {

    const handleDownload = () => {
      const pdfPath = process.env.PUBLIC_URL + '/Resume.pdf';
      window.open(pdfPath, '_blank');
    }
    
 
  return ( 
  <section id="intro">
    
    <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Ramanjeet</span> <br /> Software Developer</span>
        <p className="introPara">I am an experienced and <br /> skilled Software Developer.</p>
       
      <span className='btns'>
        <Link>
       
          <button className="btnResume" onClick={handleDownload} >
            <img src={resumeImg} alt="Resume" className='btnResumeImg'/>
            Download Resume
          </button>
          
        </Link>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className='btnImg'/>
            Hire me
          </button>
        </Link>
      </span>

    </div>
    <img src={bg} alt="Profile" className="bg" />
  </section>
  )
}

export default Intro;