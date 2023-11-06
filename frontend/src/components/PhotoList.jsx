import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

// photos is an array of photo objects: [{},{},...]
const PhotoList = ({ photos, likes, onChange, onPhotoClick, photoIndex }) => {
  const listOfPhotos = photos.map((item, index) => {
    return (
      <PhotoListItem
        key={item.id}
        location={item.location}
        imageSource={item.urls.regular}
        name={item.user.name}
        profile={item.user.profile}
        likes={likes}
        onChange={onChange}
        onClick={onPhotoClick}
        photoIndex={index}
      />
    );
  });

  return <ul className="photo-list">{listOfPhotos}</ul>;
};

export default PhotoList;
