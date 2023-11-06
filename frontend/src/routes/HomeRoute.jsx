import React from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, likes, onChange, onPhotoClick, photoIndex }) => {
  return (
    <div className="home-route">
      <TopNavigationBar likes={likes} onChange={onChange} />
      <PhotoList
        photos={photos}
        likes={likes}
        onChange={onChange}
        onPhotoClick={onPhotoClick}
        photoIndex={photoIndex}
      />
    </div>
  );
};

export default HomeRoute;
