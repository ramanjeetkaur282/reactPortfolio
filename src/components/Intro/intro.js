import React from 'react';
import './intro.css';
import bg from '../../assets/raman01.jpg';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hire.png';


const Intro = () => {
  return ( 
  <section id="intro">
    <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Ramanjeet</span> <br /> Software Developer</span>
        <p className="introPara">I am an experienced and <br /> skilled Software Developer.</p>
        <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire me</button></Link>
    </div>
    <img src={bg} alt="Profile" className="bg" />
  </section>
  )
}

export default Intro;