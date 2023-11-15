import React from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  photos,
  topics,
  likes,
  onChange,
  likedPhotos,
  onPhotoClick,
  photoIndex,
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
        likes={likes}
        likedPhotos={likedPhotos}
        onChange={onChange}
        onPhotoClick={onPhotoClick}
        photoIndex={photoIndex}
      />
    </div>
  );
};

export default HomeRoute;
