import { useReducer } from "react";

const initialState = {
  likes: 0,
  selectedPhoto: null,
  photoIndex: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_LIKES":
      return { ...state, likes: action.likes };
    case "SELECT_PHOTO":
      return { ...state, selectedPhoto: action.photo };
    case "CLOSE_MODAL":
      return { ...state, selectedPhoto: null };
    default:
      return state;
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (likes, likesExist) => {
    const newLikes = likesExist ? likes + 1 : likes - 1;
    dispatch({ type: "UPDATE_LIKES", likes: newLikes });
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: "SELECT_PHOTO", photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
