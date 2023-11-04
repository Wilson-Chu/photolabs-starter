import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ photo, onClose }) => {
  if (!photo) {
    return null;
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* modal content here */}
    </div>
  );
};

export default PhotoDetailsModal;
