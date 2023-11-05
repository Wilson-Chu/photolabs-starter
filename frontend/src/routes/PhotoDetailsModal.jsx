import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "../components/PhotoList";

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
      <div className="photo-details-modal__content">
        <img src={photo.urls.full} alt={photo.user.username} />

        {/* Display similar photos using PhotoList component */}
        <div className="photo-details-modal__similar-photos">
          <h2>Similar Photos</h2>
          <PhotoList photos={photo.similar_photos} /> {/* Pass similar_photos as photos prop */}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
