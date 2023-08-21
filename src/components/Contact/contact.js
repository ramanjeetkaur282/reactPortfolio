import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets2/facebook-icon.png';
import GitHubIcon from '../../assets2/youtube.png';
import LinkedInIcon from '../../assets2/instagram.png';
import twitterIcon from '../../assets2/twitter.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_z7ay0dq', 'template_0u94gsv', form.current, 'mBnE10oPcwccEdFWudo2Q')
          .then((result) => {
              console.log(result.text);
               e.targer.reset();
              alert('Email sent!');

          }, (error) => {
              console.log(error.text);
          });
      };

  return (
   <section id='contactPage'>
    <div id='contact'>
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please Fill out the form below to discuss work opportunities.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
           <input type="text" className="name" placeholder='Your Name' name='your_name'/>
           <input type="email" className="email" placeholder='Your email' name='your_email' />
           <textarea className='msg' name="message"  rows="5" placeholder='Your message' ></textarea>
           <button type="submit" value='Send' className="submitBtn" name=''>Submit</button>
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