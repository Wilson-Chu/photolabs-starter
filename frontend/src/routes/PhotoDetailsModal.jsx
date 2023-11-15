import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";

const PhotoDetailsModal = ({
  photo,
  onClose,
  photos,
  likedPhotos,
  onChange,
}) => {
  if (!photo) {
    return null;
  }

  const selectedPhoto = photos[photo.photoIndex]; // photoIndex imported from PhotoList
  const similarPhotos = Object.values(selectedPhoto.similar_photos);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* modal content here */}
      <div className="photo-details-modal__images">
        <section className="photo-details-modal__author-style">
          <PhotoFavButton
            onChange={onChange}
            likedPhotos={likedPhotos}
            photoId={selectedPhoto.id}
          />
          <img
            src={selectedPhoto.urls.full}
            className="photo-details-modal__image"
            alt={`${selectedPhoto.user.name}'s full size photo`}
          />
          <div className="photo-details-modal__photographer-info">
            <img
              className="photo-details-modal__photographer-profile"
              src={photo.profile}
              alt={`${selectedPhoto.user.name}'s profile`}
            />
            <div className="photo-list__user-info">
              <p className="photo-details-modal__photographer-info">
                {selectedPhoto.user.name}{" "}
              </p>
              <p className="photo-details-modal__photographer-info photo-details-modal__photographer-location">
                {selectedPhoto.location.city}, {selectedPhoto.location.country}
              </p>
            </div>
          </div>
        </section>
        <hr className="photo-details-modal__top-bar" />
        <p className="photo-details-modal__header">
          <strong>Similar Photos</strong>
        </p>
        <section className="photo-details-modal__images">
          <PhotoList
            photos={similarPhotos}
            onChange={onChange}
            likedPhotos={likedPhotos}
          />
        </section>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
