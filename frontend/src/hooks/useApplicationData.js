import { useReducer, useEffect } from "react";

export const ACTIONS = {
  UPDATE_LIKES: "UPDATE_LIKES",
  SELECT_PHOTO: "SELECT_PHOTO",
  CLOSE_MODAL: "CLOSE_MODAL",
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
};

const initialState = {
  selectedPhoto: null,
  likedPhotos: [],
  photoData: [],
  topicData: []
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_LIKES:
      const { photoId } = action.payload;
      const isLiked = state.likedPhotos.includes(photoId);
      // If a specific photo has not been liked yet, toggle to like
      if (!isLiked) {
        return {
          ...state,
          likedPhotos: [...state.likedPhotos, photoId]
        };
      } else {
        // Toggles from liked to not liked & removes photoId from array
        return {
          ...state,
          likedPhotos: state.likedPhotos.filter(likedPhotoId => likedPhotoId !== photoId)
        };
      };
    case ACTIONS.SELECT_PHOTO:
      const selectedPhoto = action.photo;
      return { ...state, selectedPhoto };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, selectedPhoto: null };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photoData: action.payload };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Retrieve complete photo list from DB
  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, []);

  // Retrieve complete topic list from DB
  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });
  }, []);

  // Displays photos only relating to specific topic that was clicked in TopicList.jsx
  const filterByTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }))
      .catch((error) => {
        console.error(`Error fetching photos for topicId: ${topicId}:`, error);
      });
  };

  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: ACTIONS.UPDATE_LIKES, payload: { photoId } });
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
    filterByTopic
  };
};

export default useApplicationData;

