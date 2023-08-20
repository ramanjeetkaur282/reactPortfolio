import React from 'react';
import FacebookIcon from '../../assets2/facebook-icon.png';
import GitHubIcon from '../../assets2/youtube.png';
import LinkedInIcon from '../../assets2/instagram.png';
import twitterIcon from '../../assets2/twitter.png';


const Contact = () => {
  return (
   <section id='contactPage'>
    <div id='contact'>
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please Fill out the form below to discuss work opportunities.</span>
        <form className="contactForm">
           <input type="text" className="name" placeholder='Your Name' />
           <input type="email" className="email" placeholder='Your email' />
           <textarea className='msg' name="message"  rows="5" placeholder='Your message'></textarea>
           <button type="submit" value='Send' className="submitBtn">Submit</button>
           <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={twitterIcon} alt="Twitter" className="link" />
            <img src={GitHubIcon} alt="GitHub" className="link" />
            <img src={LinkedInIcon} alt="LinkedIn" className="link" />
           </div>
        </form>

    </div>
   </section>
  )
}

export default Contact;