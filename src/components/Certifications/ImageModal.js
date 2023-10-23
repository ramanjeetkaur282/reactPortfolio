import React from 'react';
import Modal from 'react-modal';
import './ImageModal.css'; // Import your CSS file


const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className="modal-container"
      overlayClassName="modal-overlay"
      
    >
      <div className="modal-content">
        <button className="close-button" onClick={onRequestClose}>
          CLOSE
        </button>
        <img src={imageUrl} alt="Certification" className="modal-img" />
      </div>
    </Modal>
  );
};

export default ImageModal;
