import React from 'react';
import './skills.css';
import UIDesign from '../../assets/cloud.jpeg';
import WebDesign from '../../assets/webDesign.png';
import AppDesign from '../../assets/Web-Development-Projects-1-2048x1001.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDes"> I am skilled and passionate wed designer with experience of over 3 years</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Cloud Computing</h2>
                    <p>This is a Demo Text for Cloud Comptuing</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                   <p>This is a Demo Text for Cloud Comptuing</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App DEsign</h2>
                    <p>This is a Demo Text for Cloud Comptuing</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;