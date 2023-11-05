import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

// photos is an array of photo objects: [{},{},...]
const PhotoList = (props) => {
  const { photos, likes, onChange, onPhotoClick } = props;

  const listOfPhotos = photos.map((item) => {
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
      />
    );
  });

  return <ul className="photo-list">{listOfPhotos}</ul>;
};

export default PhotoList;
