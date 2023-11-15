import React, { useCallback, useState } from "react";

import "../styles/PhotoFavButton.scss";
import FavIcon from "./FavIcon";

function PhotoFavButton({ likes, onChange, likedPhotos, photoId }) {
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    like ? onChange(likes, false) : onChange(likes, true);
    setLike(!like);
  };

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
