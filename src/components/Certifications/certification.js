import React from 'react';
import c1 from '../../assets/c1.png';
import C2 from '../../assets/C2.png';
import './certification.css';

const Certifications = ({ certifications }) => {
  return (
    <section className="certification-section">
      <h2>Certifications</h2>
      <div className="certification-tiles">
        
          <div className="certification-tile">
            <img src={c1} alt='certification' />
            <a href=' ' target="_blank" rel="noopener noreferrer">
              Verify
            </a>
          </div>
          <div className="certification-tile">
            <img src={C2} alt='certification' />
            <a href=' ' target="_blank" rel="noopener noreferrer">
              Verify
            </a>
          </div>
          
        
      </div>
    </section>
  );
};

export default Certifications;
