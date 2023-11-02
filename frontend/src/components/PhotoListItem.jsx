import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile } = props;
  console.log("this is the PhotoListItem.jsx!");
  return (
    <div className="PhotoListItem">
      <img src={imageSource} />
      Hello this is {username}!
      <img src={profile} />
    </div>
  );
};

export default PhotoListItem;
