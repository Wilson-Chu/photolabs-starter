import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    filterByTopic,
  } = useApplicationData();

  const { likes, selectedPhoto, photoIndex, likedPhotos, photoData, topicData } = state;

  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        likes={likes}
        likedPhotos={likedPhotos}
        onChange={updateToFavPhotoIds}
        onPhotoClick={setPhotoSelected}
        photoIndex={photoIndex}
        filterByTopic={filterByTopic}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          onClose={onClosePhotoDetailsModal}
          photos={photoData}
          likes={likes}
          likedPhotos={likedPhotos}
          onChange={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;
