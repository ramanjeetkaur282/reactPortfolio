import React from 'react';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCode,} from '@fortawesome/free-solid-svg-icons';
import { faJs, 
  faReact,
  faJava,
  faHtml5,
  faCss3,
  faNode,
  faGithub,
  faJira,
  faDocker,
  faAmazon
  } from '@fortawesome/free-brands-svg-icons';


const Skills = () => {
       
  return (
    <section id="skills">
    <h2 className='sheader'>Skills</h2>
    <p className='spara'>Platforms/Languages/Technologies/Frameworks/Tools</p>

    <div className='icon-grid'>
      <div className='icons'>
    <div className='icon-pack'>
    <FontAwesomeIcon className='icon' icon={faJs} style={{ color: '#61DBFB' , fontSize: '100px',padding: '15px' }} />
     <span style={{ fontSize: '18px' }}>JavaScript</span> 
     </div>
     <div className='icon-pack'>
     <FontAwesomeIcon className="icon" icon={faReact} style={{ color: '#61DBFB' , fontSize: '100px',padding: '15px'  }} />
     <span style={{ fontSize: '18px' }}>React</span> 
     </div>
     <div className='icon-pack'>
     <FontAwesomeIcon className="icon" icon={faHtml5} style={{ color: '#E34F26', fontSize: '100px',padding: '15px'  }} />
     <span style={{ fontSize: '18px' }}>HTML</span> 
     </div>
     <div className='icon-pack'>
     <FontAwesomeIcon className="icon" icon={faCss3} style={{ color: '#1572B6', fontSize: '100px',padding: '15px'  }} />
     <span style={{ fontSize: '18px' }}>CSS</span> 
     </div>
     <div className='icon-pack'>
     <FontAwesomeIcon className="icon" icon={faJava} style={{ color: '#007396' , fontSize: '100px',padding: '15px' }} />
      <span style={{ fontSize: '18px' }}>JAVA</span> 
      </div>
      <div className='icon-pack'>
      <FontAwesomeIcon className="icon" icon={faDatabase} style={{ color: '#336791', fontSize: '100px' ,padding: '15px' }} />
      <span style={{ fontSize: '18px' }}>SQL</span> 
      </div>
      <div className='icon-pack'>
      <FontAwesomeIcon className="icon" icon={faNode} style={{ color: '#68A063', fontSize: '100px', padding: '15px'  }} />
      <span style={{ fontSize: '18px' }}>Node JS</span> 
      </div>
      <div className='icon-pack'>
      <FontAwesomeIcon className="icon" icon={faCode} style={{ color: '#007ACC' , fontSize: '100px',padding: '15px' }} />
      <span style={{ fontSize: '18px' }}>VS Code</span> 
      </div>
      <div className='icon-pack'>
      <FontAwesomeIcon className="icon" icon={faJira} style={{ color: '#0052CC' , fontSize: '100px' ,padding: '15px'}} />
      <span style={{ fontSize: '18px' }}>Jira</span>
      </div>
      <div className='icon-pack'>
      <FontAwesomeIcon className="icon" icon={faDocker} style={{ color: '#2496ED', fontSize: '100px',padding: '15px'  }} />
      <span style={{ fontSize: '18px' }}>Docker</span>
      </div>
      <div className='icon-pack'>
      <FontAwesomeIcon className="icon" icon={faAmazon} style={{ color: '#FFFFFF', fontSize: '100px' ,padding: '15px' }} />
      <span style={{ fontSize: '18px' }}>AWS</span> 
      </div>
      <div className='icon-pack'>
      <FontAwesomeIcon className="icon" icon={faGithub} style={{ color: '#F05032' , fontSize: '100px',padding: '15px' }} />
      <span style={{ fontSize: '18px' }}>GitHub</span> 
      </div>
      </div>
      </div>
  </section>
  )
}

export default Skills;