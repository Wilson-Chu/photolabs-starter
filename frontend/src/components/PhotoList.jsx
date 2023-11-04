import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const sampleDataForPhotoList = photos;
  const { likes, onChange, onPhotoClick } = props;

  const listOfPhotos = sampleDataForPhotoList.map((item) => {
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
