import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {
    username,
    imageSource,
    location,
    profile,
    likedPhotos,
    onChange,
    onClick,
    photoId,
  } = props;

  const handleItemClick = () => {
    if (onClick) {
      onClick(props);
    }
  };

  return (
    <article className="photo-list__item">
      <PhotoFavButton
        photoId={photoId}
        onChange={onChange}
        likedPhotos={likedPhotos}
      />
      <img
        className="photo-list__image"
        src={imageSource}
        alt={username}
        onClick={handleItemClick}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt={`${username}'s profile`}
        />
        <div className="photo-list__user-info">
          <p className="photo-list__user-info">{username} </p>
          <p className="photo-list__user-info photo-list__user-location">
            {location.city}, {location.country}
          </p>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
