import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile, likes, onChange } =
    props;

  return (
    <article className="photo-list__item">
      <PhotoFavButton likes={likes} onChange={onChange} />
      <img className="photo-list__image" src={imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} />
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
