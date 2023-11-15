import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

// photos is an array of photo objects: [{},{},...]
const PhotoList = ({ photos, likedPhotos, onChange, onPhotoClick }) => {
  const listOfPhotos = photos.map((item, index) => {
    return (
      <PhotoListItem
        key={item.id}
        location={item.location}
        imageSource={item.urls.regular}
        username={item.user.name}
        profile={item.user.profile}
        photoId={item.id}
        likedPhotos={likedPhotos}
        onChange={onChange}
        onClick={onPhotoClick}
        photoIndex={index} // Used in PhotoDetailsModal.jsx
      />
    );
  });

  return <ul className="photo-list">{listOfPhotos}</ul>;
};

export default PhotoList;
