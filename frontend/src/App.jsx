import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import photos from "mocks/photos";

const App = () => {
  const [likes, setLikes] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(null);

  const updateLikes = (likes, likesExist) => {
    likesExist ? setLikes(++likes) : setLikes(--likes);
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        likes={likes}
        onChange={updateLikes}
        onPhotoClick={handlePhotoClick}
        photoIndex={photoIndex}
      />
      {selectedPhoto && (
        <PhotoDetailsModal photo={selectedPhoto} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
