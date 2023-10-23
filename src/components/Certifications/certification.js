import React, {useState} from 'react';
import c1 from '../../assets/c1.png';
import C2 from '../../assets/C2.png';
import SQL from '../../assets/SQL.png';
import API from '../../assets/APIs.png';
import HTML from '../../assets/HTML-1.png';
import JavaScript from '../../assets/JavaScript.png';

import ImageModal from './ImageModal';
import './certification.css';

const Certifications = ({ certifications }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
 
  const openModal = (imageUrl) => {
    console.log('Open Modal:', imageUrl);
    if (!isModalOpen) {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    console.log('Close Modal');
    setSelectedImage('');
    setIsModalOpen(false);
  };
  return (
    <section id="certificationSection">
      <h2 className='cheader'>My Certifications</h2>
       <div className= {`app-container ${isModalOpen ? 'blur-background' : 'certification-tiles'}`}>
          <div className= 'certification-tile'>
            <img 
            src={c1} 
            alt='certification' 
            onClick={()=>openModal(c1)}/>
            <a href='https://www.credly.com/badges/258775e3-6c33-4b5c-a03a-32466e7a5a27/linked_in_profile' target="_blank" rel="noopener noreferrer">
              AWS Cloud Practitioner
            </a>
          </div>

          <div className="certification-tile">
            <img src={C2}
             alt='certification' 
             onClick={()=>openModal(C2)}
             />
            <a href='https://www.credly.com/badges/1aa8ff77-dfe4-42ba-974c-5d3e52a069b8/linked_in_profile' target="_blank" rel="noopener noreferrer">
              AWS Solutions Architect
            </a>
          </div>   
      </div>
      

      <div className={`app-container ${isModalOpen ? 'blur-background' : 'certification-tiles-2'}`}>
        <div className="certification-tile">
          <img src={JavaScript} 
          alt='certification' 
          onClick={()=>openModal(JavaScript)} />
            JavaScript
        </div>

        <div className="certification-tile">
          <img src={SQL} alt='certification' onClick={()=>openModal(SQL)}/>
            SQL
        </div>
        
        <div className="certification-tile">
          <img src={API} alt='certification' onClick={()=>openModal(API)} />
           APIs and Web Services
        </div>

        <div className="certification-tile">
          <img src={HTML} alt='certification' onClick={()=>openModal(HTML)} />
            HTML
        </div>

      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImage}
      />
    </div>
  </section>
  );
};

export default Certifications;
