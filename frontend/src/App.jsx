import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
// import photos from "mocks/photos";
import topics from "mocks/topics";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const { likes, selectedPhoto } = state;

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={topics}
        likes={likes}
        onChange={updateToFavPhotoIds}
        onPhotoClick={setPhotoSelected}
        photoIndex={state.photoIndex}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          onClose={onClosePhotoDetailsModal}
          photos={state.photoData}
          likes={likes}
          onChange={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;
