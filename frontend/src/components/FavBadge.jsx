import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

// Note: '!!' is used to coerce to Boolean value
const FavBadge = ({ displayAlert, isFavPhotoExist }) => {
  return (
    <div className="fav-badge">
      <FavIcon displayAlert={!!isFavPhotoExist} selected />
    </div>
  );
};

export default FavBadge;
