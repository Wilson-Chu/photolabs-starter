import { useState } from "react";

const useApplicationData = () => {
  // Initialize the state variables
  const [state, setState] = useState({
    likes: 0,
    selectedPhoto: null,
    photoIndex: null,
  });

  // Action to update the favorite photos
  const updateToFavPhotoIds = (likes, likesExist) => {
    const newLikes = likesExist ? likes + 1 : likes - 1;
    setState((prev) => ({ ...prev, likes: newLikes }));
  };

  // Action to set the selected photo
  const setPhotoSelected = (photo) => {
    setState((prev) => ({ ...prev, selectedPhoto: photo }));
  };

  // Action to close the photo details modal
  const onClosePhotoDetailsModal = () => {
    setState((prev) => ({ ...prev, selectedPhoto: null }));
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;