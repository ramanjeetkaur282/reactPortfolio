import React from "react";
import './navbar.css';
import logo from '../../assets/logo.jpg';
import {Link} from 'react-scroll';
import contactImg from '../../assets/phone-book.png';



const Navbar=()=>{
    return(
        <nav className="navbar">
        <img src={logo} alt="Logo" className="logo"/>
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Portfolio</Link>
            <Link className="desktopMenuListItem">Blog</Link>

        </div>
        <button className="desktopMenuBtn">
            <img src={contactImg} alt="" className="desktopMenuImg" />
            Contact Me
        </button>
            </nav>
    )
}
export default Navbar