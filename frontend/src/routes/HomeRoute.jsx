import React from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  photos,
  topics,
  onChange,
  likedPhotos,
  onPhotoClick,
  filterByTopic,
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        isFavPhotoExist={likedPhotos.length}
        topics={topics}
        filterByTopic={filterByTopic}
      />
      <PhotoList
        photos={photos}
        likedPhotos={likedPhotos}
        onChange={onChange}
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
