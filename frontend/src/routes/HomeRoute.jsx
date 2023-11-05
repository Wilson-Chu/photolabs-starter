import React from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import photos from "../mocks/photos";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { likes, onChange, onPhotoClick } = props;

  return (
    <div className="home-route">
      <TopNavigationBar likes={likes} onChange={onChange} />
      <PhotoList
        photos={photos}
        likes={likes}
        onChange={onChange}
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
