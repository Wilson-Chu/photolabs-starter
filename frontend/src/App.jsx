import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import photos from "mocks/photos";
import useApplicationData from "./hooks/useApplicationData"; // Import the custom hook

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
        photos={photos}
        likes={likes}
        onChange={updateToFavPhotoIds}
        onPhotoClick={setPhotoSelected}
        photoIndex={state.photoIndex}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          onClose={onClosePhotoDetailsModal}
          photos={photos}
          likes={likes}
          onChange={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;
