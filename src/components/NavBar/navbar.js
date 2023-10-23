import React, { useState } from "react";
import './navbar.css';
import {Link} from 'react-scroll';
import logo from '../../assets/r-logo.png';
// import contactImg from '../../assets/phone-book.png';
import menu from '../../assets2/menu.png';

const Navbar=({ setSelectedSection})=>{
    const [showMenu,setShowMenu]=useState(false);
    const scrollToContact = () => {
      const section = document.getElementById('contactPage');
      section.scrollIntoView({ behavior: 'smooth'});
    };
    return(
        <nav className="navbar">
        <img src={logo} alt="Logo" className="logo"/>
        <div className="flex-grow"></div> 
     
        <div className="desktopMenu">
          <Link
            activeClass='active'
            to='intro'
            spy={true}
            smooth={true}
            offset={-50}
            duration={300}
            onClick={() => setSelectedSection('intro')}
            className="navItem"
          >
            Home
          </Link>

          <Link
            activeClass='active'
            to='skills'
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
            onClick={() => setSelectedSection('skills')}
            className="navItem"
          >
            Skills
          </Link>
        
        
          <Link
            activeClass='active'
            to='certificationSection'
            spy={true}
            smooth={true}
            offset={-50}
            duration={300}
            onClick={() => setSelectedSection('certificationSection')}
            className="navItem"
          >
            Certifications
          </Link>
        
          <Link
            activeClass='active'
            to='works'
            spy={true}
            smooth={true}
            offset={-50}
            duration={300}
            onClick={() => setSelectedSection('works')}
            className="navItem"
          >
            Portfolio
          </Link>
        
      
        </div>
      
        <button className="desktopMenuBtn" onClick={scrollToContact}>
            {/* <img src={contactImg} alt="" className="desktopMenuImg" /> */}
            Contact Me
        </button>

        <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display:showMenu?'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='certificationSection' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Certifications</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>contact</Link>
        </div>
        </nav>
    )
}
export default Navbar;


