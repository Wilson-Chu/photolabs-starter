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

  const { selectedPhoto, likedPhotos, photoData, topicData } = state;

  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        likedPhotos={likedPhotos}
        onChange={updateToFavPhotoIds}
        onPhotoClick={setPhotoSelected}
        filterByTopic={filterByTopic}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          onClose={onClosePhotoDetailsModal}
          photos={photoData}
          likedPhotos={likedPhotos}
          onChange={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;
