import React from 'react';
import './intro.css';
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
       <div className='topText'>"I haven't failed. I just found thousand roads that didn't work."</div>
         <div className='introText'>
          <div className="introContent">
            <span className="hello">Hi,</span>
             <span className="introText">I'm <span className="introName">Ramanjeet</span></span>
              <p className="introPara"> Detail-Oriented with more than 3 years experience in IT industry as Web Developer and <br/> 
                                        currently embarking on journey of Cloud Computing.</p>
               <p className='introPara'>
                   The transition from web development to cloud technology is driven by my desire to take a <br/>
                   holistic approach to application development. While web development allowed me to shape the<br/> 
                   front-end and user-facing aspects of applications, I recognized the importance of understanding <br/>
                   the entire technology stack. Cloud computing offers the opportunity to dive deeper into the <br/>
                   infrastructure, networking, and scalability aspects that underpin successful applications.
                </p>
        
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
        </div>

        {/* <img src={bg} alt="Profile" className="bg" /> */}
      </section>
  )
}

export default Intro;