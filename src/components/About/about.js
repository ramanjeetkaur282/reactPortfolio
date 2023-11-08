import React from 'react';
import './about.css'; // Import your CSS file for styling
import profile from '../../assets/profile.jpeg';

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="column">
        {/* First column: Picture */}
        <img src={profile} alt="Profile" className="profile-picture" />
      </div>
      <div className="column-2">
        {/* Second column: Details */}
        <h2>Personal Details</h2>
        <h3>Residence</h3><p>Mississauga,Ontario <span>(Open for relocation anywhere in Canada)</span></p>
        <h3>Email</h3><p>ramanjeetkaur282@gmail.com</p>
        <h3>Education</h3><p>M.Eng in Systems and Computers Engineering</p>
        <h3>School</h3><p>Carleton University, Ottawa</p>
        <h3 className='status'>Status (Open for new opportunities)- Last Updated (8th November,2023)</h3>
        <p className='role'>Current Role: Application Developer</p>
        <p className='role'>Current Employer: System Soft Technologies</p>
        
        
      </div>
      <div className="column-3">
        {/* Third column: Description */}
        <h2>About Me</h2>
        <p>
        Detail-oriented with over 4 years of experience in the IT industry, proficient with latest web technologies, cloud technologies and seeking to bring fast and intelligent solutions to an organization.
        </p>
        <br/>

        <p>
          Hard working and self-motivated team player with strong analytical and strategic thinking skills. I always want to maintain a high level of professionalism while providing consistent and quality services. Fast learner and welcomes the challenge to learn and develop new skills.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
