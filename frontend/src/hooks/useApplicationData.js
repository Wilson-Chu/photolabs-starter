import { useReducer, useEffect } from "react";

export const ACTIONS = {
  UPDATE_LIKES: "UPDATE_LIKES",
  SELECT_PHOTO: "SELECT_PHOTO",
  CLOSE_MODAL: "CLOSE_MODAL",
};

const initialState = {
  likes: 0,
  selectedPhoto: null,
  photoIndex: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_LIKES:
      const newLikes = action.likes;
      return { ...state, likes: newLikes };
    case ACTIONS.SELECT_PHOTO:
      const selectedPhoto = action.photo;
      return { ...state, selectedPhoto };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, selectedPhoto: null };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (likes, likesExist) => {
    const newLikes = likesExist ? likes + 1 : likes - 1;
    dispatch({ type: ACTIONS.UPDATE_LIKES, likes: newLikes });
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;

