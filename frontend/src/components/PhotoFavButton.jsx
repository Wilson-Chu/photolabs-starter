import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ onChange, likedPhotos, photoId }) {
  return (
    <div className="photo-list__fav-icon">
      <div
        className="photo-list__fav-icon-svg"
        onClick={() => onChange(photoId)}
      >
        <FavIcon selected={likedPhotos.includes(photoId)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
