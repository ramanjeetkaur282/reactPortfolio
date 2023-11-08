import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const form = useRef();
   
    
    const iconLinks = [
        { icon: faGithub, link: 'https://github.com/ramanjeetkaur282' ,color:'purple' },
        { icon: faLinkedin, link: 'https://www.linkedin.com/in/ramanjeet-kaur-282abc/', color:'#0072b1' },
        { icon: faFacebook, link: 'https://www.facebook.com/ramanjeet.kaur.5661', color:'#87CEEB' },
      ];

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_z7ay0dq', 
            'template_f6la5l6', 
             form.current,
            'mjPTgSKBFkO6cHarb'
            )
          .then((result) => {
              console.log(result.text);
              console.log("message sent");
               e.target.reset();
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
             <input type="text"  className="name"  placeholder='Your Name'  name='name'/>
             <input type="email" className="email" placeholder='Your email' name='email'/>
             <textarea className='msg' name="message"  rows="5" placeholder='Your message' ></textarea>
             <button type='submit' value='Send' className="submitBtn">Submit</button>
            
            <div className="links">
            {  iconLinks.map((item, index) => (
                <a href={item.link} key={index} target="_blank" rel="noopener noreferrer" className='link'>
                   <FontAwesomeIcon icon={item.icon} size="2x" color={item.color} />
                 </a>
             ))}
           </div>
           </form>
    </div>
   </section>
  )
}

export default Contact;