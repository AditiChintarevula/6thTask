import React from 'react';
import './Modal.css';

const Modal = ({ image, closeModal, showPreviousImage, showNextImage }) => {
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>&times;</span>
        <button className="prev" onClick={showPreviousImage}>
          &#10094;
        </button>
        <img src={image.src} alt={image.alt} className="modal-image" />
        <button className="next" onClick={showNextImage}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Modal;
