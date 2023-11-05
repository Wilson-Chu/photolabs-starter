import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "../components/PhotoList";

import photos from "mocks/photos";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

const PhotoDetailsModal = ({ photo, onClose }) => {
  if (!photo) {
    return null;
  }

  // replace photos[1] with selected photo later...
  const similarPhotos = Object.values(photos[1].similar_photos);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* modal content here */}
      <div className="photo-details-modal__images">
        <img
          src={photos[1].urls.regular}
          className="photo-details-modal__image"
        />
        <p className="photo-details-modal__header">
          <strong>Similar Photos</strong>
        </p>
        <section className="photo-details-modal__images">
          <PhotoList photos={similarPhotos} />
        </section>
      </div>
      {console.log(photo)} {/* Testing... */}
    </div>
  );
};

export default PhotoDetailsModal;
