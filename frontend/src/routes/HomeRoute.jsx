import React from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { photos, likes, onChange, onPhotoClick, photoIndex } = props;

  return (
    <div className="home-route">
      <TopNavigationBar likes={likes} onChange={onChange} />
      <PhotoList
        photos={photos}
        likes={likes}
        onChange={onChange}
        onPhotoClick={onPhotoClick}
        photoIndex = {photoIndex}
      />
    </div>
  );
};

export default HomeRoute;
