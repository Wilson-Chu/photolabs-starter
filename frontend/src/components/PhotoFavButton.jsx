import React, { useCallback, useState } from "react";

import "../styles/PhotoFavButton.scss";
import FavBadge from "./FavBadge";

function PhotoFavButton(props) {
  const [like, setLike] = useState(false);
  const { likes, onChange } = props;

  const toggleLike = () => {
    like ? onChange(likes, false) : onChange(likes, true);
    setLike(!like);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={toggleLike}>
        <FavBadge isFavPhotoExist={like} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
